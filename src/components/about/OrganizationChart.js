"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { fetchOrgMemberTree, fetchOrgPlants, formatOrgImageUrl } from "@/lib/api";
import { PageLoader } from "../shared/PageLoader";

function collectExpandableIds(nodes) {
  const ids = new Set();
  const walk = (list) => {
    for (const node of list) {
      if (node.children?.length) {
        ids.add(node.id);
        walk(node.children);
      }
    }
  };
  walk(nodes);
  return ids;
}

function getInitials(name) {
  if (!name) return "?";
  return name
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function OrgMemberAvatar({ node }) {
  const photoUrl = node.photo ? formatOrgImageUrl(node.photo) : null;
  const vacant = node.is_vacant || /vacant/i.test(node.name || "");

  if (photoUrl) {
    return (
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden border border-[#e5e7eb] bg-white">
        <Image
          src={photoUrl}
          alt={node.name}
          fill
          sizes="64px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center border font-title text-sm sm:text-base font-black uppercase ${
        vacant
          ? "border-dashed border-[#d1d5db] bg-[#f9fafb] text-[#9ca3af]"
          : "border-[#e5e7eb] bg-[#C75550]/10 text-[#C75550]"
      }`}
    >
      {vacant ? <i className="fa-solid fa-user-plus text-lg" /> : getInitials(node.name)}
    </div>
  );
}

function OrgMemberCard({ node, hasChildren, isExpanded, onToggle }) {
  const vacant = node.is_vacant || /vacant/i.test(node.name || "");
  const deptColor = node.department?.color || "#C75550";

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 border bg-white transition-shadow duration-200 ${
        vacant
          ? "border-dashed border-[#d1d5db] bg-[#fafafa]"
          : "border-[#e5e7eb] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
      }`}
      style={{
        borderLeftWidth: vacant ? undefined : "4px",
        borderLeftColor: vacant ? undefined : deptColor,
      }}
    >
      <OrgMemberAvatar node={node} />

      <div className="flex-1 min-w-0 text-left">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className="font-montserrat text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
            style={{
              color: deptColor,
              backgroundColor: `${deptColor}14`,
              border: `1px solid ${deptColor}33`,
            }}
          >
            {node.department?.name || "Department"}
          </span>
          {node.is_group && node.group_count != null && (
            <span className="font-montserrat text-[9px] font-bold uppercase tracking-wider text-[#6b7280] bg-[#f3f4f6] px-2 py-0.5 border border-[#e5e7eb]">
              {node.group_count} members
            </span>
          )}
          {vacant && (
            <span className="font-montserrat text-[9px] font-bold uppercase tracking-wider text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 border border-dashed border-[#d1d5db]">
              Vacant
            </span>
          )}
        </div>

        <h3
          className={`font-title text-base sm:text-lg font-black uppercase tracking-tight leading-snug ${
            vacant ? "text-[#9ca3af]" : "text-[#1c1b1b]"
          }`}
        >
          {node.name}
        </h3>
        <p className="font-body text-xs sm:text-sm text-[#4b5563] mt-0.5">{node.title}</p>
      </div>

      {hasChildren && (
        <button
          type="button"
          onClick={() => onToggle(node.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse team" : "Expand team"}
          className="shrink-0 w-9 h-9 border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] hover:border-[#C75550] hover:text-[#C75550] transition-colors duration-200 self-start sm:self-center"
        >
          <i
            className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}

function OrgTreeNode({ node, expandedIds, onToggle }) {
  const hasChildren = node.children?.length > 0;
  const isExpanded = expandedIds.has(node.id);

  return (
    <li className="w-full">
      <OrgMemberCard
        node={node}
        hasChildren={hasChildren}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />

      {hasChildren && isExpanded && (
        <div className="ml-6 sm:ml-10 md:ml-12 pl-5 sm:pl-6 md:pl-8 border-l-2 border-[#C75550]/25 mt-3 mb-1">
          <ul className="flex flex-col gap-3 w-full">
            {node.children.map((child) => (
              <OrgTreeNode
                key={child.id}
                node={child}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function OrganizationChart() {
  const [plants, setPlants] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [tree, setTree] = useState([]);
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [loadingPlants, setLoadingPlants] = useState(true);
  const [loadingTree, setLoadingTree] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlants() {
      setLoadingPlants(true);
      setError(null);
      const data = await fetchOrgPlants();
      setPlants(data);
      if (data.length > 0) {
        setSelectedSlug(data[0].slug);
      }
      setLoadingPlants(false);
    }
    loadPlants();
  }, []);

  useEffect(() => {
    if (!selectedSlug) return;

    async function loadTree() {
      setLoadingTree(true);
      setError(null);
      const data = await fetchOrgMemberTree(selectedSlug);
      setTree(data);
      setExpandedIds(collectExpandableIds(data));
      setLoadingTree(false);
    }
    loadTree();
  }, [selectedSlug]);

  const handleToggle = useCallback((id) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleExpandAll = () => setExpandedIds(collectExpandableIds(tree));
  const handleCollapseAll = () => setExpandedIds(new Set());

  return (
    <section className="w-full py-20 sm:py-24 bg-white border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="flex flex-col items-start text-left">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              ORGANIZATION
            </span>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-tight">
              Organization Chart
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-4">
              Explore our plant-wise leadership and departmental structure. Expand or collapse
              sections to view reporting lines across operations.
            </p>
          </div>

          {tree.length > 0 && !loadingTree && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleExpandAll}
                className="font-montserrat text-[10px] font-bold uppercase tracking-wider px-4 py-2 border border-[#e5e7eb] text-[#4b5563] hover:border-[#C75550] hover:text-[#C75550] transition-colors"
              >
                Expand all
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="font-montserrat text-[10px] font-bold uppercase tracking-wider px-4 py-2 border border-[#e5e7eb] text-[#4b5563] hover:border-[#C75550] hover:text-[#C75550] transition-colors"
              >
                Collapse all
              </button>
            </div>
          )}
        </div>

        {loadingPlants ? (
          <PageLoader className="min-h-[280px]" />
        ) : plants.length === 0 ? (
          <p className="font-body text-sm text-[#4b5563] text-center py-12 border border-[#e5e7eb] bg-[#f9fafb]">
            Organization data is not available at the moment.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-8">
              {plants.map((plant) => {
                const active = plant.slug === selectedSlug;
                return (
                  <button
                    key={plant.id}
                    type="button"
                    onClick={() => setSelectedSlug(plant.slug)}
                    className={`font-montserrat text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 border transition-all duration-200 ${
                      active
                        ? "bg-[#C75550] border-[#C75550] text-white shadow-[0_4px_12px_rgba(199,85,80,0.25)]"
                        : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#C75550]/40"
                    }`}
                  >
                    {plant.name}
                  </button>
                );
              })}
            </div>

            {loadingTree ? (
              <PageLoader className="min-h-[320px]" />
            ) : error ? (
              <p className="font-body text-sm text-[#C75550] text-center py-12">{error}</p>
            ) : tree.length === 0 ? (
              <p className="font-body text-sm text-[#4b5563] text-center py-12 border border-[#e5e7eb] bg-[#f9fafb]">
                No organization members found for this plant.
              </p>
            ) : (
              <div className="border border-[#e5e7eb] bg-[#f9fafb] p-4 sm:p-6 lg:p-8">
                <ul className="flex flex-col gap-3 w-full">
                  {tree.map((node) => (
                    <OrgTreeNode
                      key={node.id}
                      node={node}
                      expandedIds={expandedIds}
                      onToggle={handleToggle}
                    />
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
