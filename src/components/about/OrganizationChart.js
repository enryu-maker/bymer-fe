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

function OrgMemberBadges({ node, vacant, deptColor, compact = false }) {
  return (
    <div
      className={`flex flex-wrap items-center ${compact ? "justify-center gap-0.5 mb-1" : "gap-2 mb-1"}`}
    >
      <span
        className={`font-montserrat font-bold uppercase tracking-wider ${
          compact ? "text-[7px] px-1.5 py-px" : "text-[9px] sm:text-[10px] px-2 py-0.5"
        }`}
        style={{
          color: deptColor,
          backgroundColor: `${deptColor}14`,
          border: `1px solid ${deptColor}33`,
        }}
      >
        {node.department?.name || "Department"}
      </span>
      {node.is_group && node.group_count != null && (
        <span
          className={`font-montserrat font-bold uppercase tracking-wider text-[#6b7280] bg-[#f3f4f6] border border-[#e5e7eb] ${
            compact ? "text-[7px] px-1.5 py-px" : "text-[9px] px-2 py-0.5"
          }`}
        >
          {compact ? node.group_count : `${node.group_count} members`}
        </span>
      )}
      {vacant && (
        <span
          className={`font-montserrat font-bold uppercase tracking-wider text-[#9ca3af] bg-[#f3f4f6] border border-dashed border-[#d1d5db] ${
            compact ? "text-[7px] px-1.5 py-px" : "text-[9px] px-2 py-0.5"
          }`}
        >
          Vacant
        </span>
      )}
    </div>
  );
}

function ExpandButton({ isExpanded, onToggle, direction = "down", compact = false }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "Collapse team" : "Expand team"}
      className={`shrink-0 border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] hover:border-[#C75550] hover:text-[#C75550] transition-colors duration-200 ${
        compact ? "w-6 h-6" : "w-9 h-9"
      }`}
    >
      <i
        className={`fa-solid fa-chevron-${direction} transition-transform duration-200 ${
          compact ? "text-[8px]" : "text-[10px]"
        } ${
          direction === "down" && isExpanded
            ? "rotate-180"
            : direction === "right" && isExpanded
              ? "rotate-90"
              : ""
        }`}
      />
    </button>
  );
}

/* Mobile / tablet: vertical cards with avatar */
function OrgMemberCardVertical({ node, hasChildren, isExpanded, onToggle }) {
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
        <OrgMemberBadges node={node} vacant={vacant} deptColor={deptColor} />
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
        <ExpandButton
          isExpanded={isExpanded}
          onToggle={() => onToggle(node.id)}
          direction="down"
        />
      )}
    </div>
  );
}

/* Desktop: compact horizontal cards without avatar */
function OrgMemberCardHorizontal({ node, hasChildren, isExpanded, onToggle }) {
  const vacant = node.is_vacant || /vacant/i.test(node.name || "");
  const deptColor = node.department?.color || "#C75550";

  return (
    <div
      className={`relative flex flex-col items-center text-center w-[128px] xl:w-[140px] p-2 border bg-white transition-shadow duration-200 ${
        vacant
          ? "border-dashed border-[#d1d5db] bg-[#fafafa]"
          : "border-[#e5e7eb] hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      }`}
      style={{
        borderTopWidth: vacant ? undefined : "3px",
        borderTopColor: vacant ? undefined : deptColor,
      }}
    >
      {hasChildren && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
          <ExpandButton
            isExpanded={isExpanded}
            onToggle={() => onToggle(node.id)}
            direction="right"
            compact
          />
        </div>
      )}

      <div className="w-full min-w-0">
        <OrgMemberBadges node={node} vacant={vacant} deptColor={deptColor} compact />
        <h3
          className={`font-title text-[10px] font-black uppercase tracking-tight leading-tight ${
            vacant ? "text-[#9ca3af]" : "text-[#1c1b1b]"
          }`}
        >
          {node.name}
        </h3>
        <p className="font-body text-[9px] text-[#4b5563] mt-0.5 leading-tight">{node.title}</p>
      </div>
    </div>
  );
}

function isFounderNode(node) {
  return /founder/i.test(node.department?.name || "");
}

function OrgTreeNodeVertical({ node, expandedIds, onToggle }) {
  const hasChildren = node.children?.length > 0;
  const isExpanded = expandedIds.has(node.id);

  return (
    <li className="w-full">
      <OrgMemberCardVertical
        node={node}
        hasChildren={hasChildren}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />

      {hasChildren && isExpanded && (
        <div className="ml-6 sm:ml-10 md:ml-12 pl-5 sm:pl-6 md:pl-8 border-l-2 border-[#C75550]/25 mt-3 mb-1">
          <ul className="flex flex-col gap-3 w-full">
            {node.children.map((child) => (
              <OrgTreeNodeVertical
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

function OrgTreeNodeHorizontal({ node, expandedIds, onToggle, isRoot = false }) {
  const hasChildren = node.children?.length > 0;
  const isExpanded = expandedIds.has(node.id);

  return (
    <div className={`flex items-start ${isRoot ? "" : "relative"}`}>
      {!isRoot && (
        <div className="w-4 xl:w-5 h-px bg-[#C75550]/35 shrink-0 mt-5" aria-hidden="true" />
      )}

      <div className="flex items-center shrink-0">
        <OrgMemberCardHorizontal
          node={node}
          hasChildren={hasChildren}
          isExpanded={isExpanded}
          onToggle={onToggle}
        />
      </div>

      {hasChildren && isExpanded && (
        <div className="flex items-start ml-0">
          <div className="w-4 xl:w-5 flex shrink-0 pt-5" aria-hidden="true">
            <div className="w-full h-px bg-[#C75550]/35" />
          </div>

          <div className="flex flex-col justify-start gap-1 relative">
            {node.children.length > 1 && (
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-[#C75550]/25"
                aria-hidden="true"
              />
            )}

            {node.children.map((child) => (
              <OrgTreeNodeHorizontal
                key={child.id}
                node={child}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function OrgFounderGroup({ founders, expandedIds, onToggle }) {
  const founderChildren = founders.flatMap((founder) => founder.children || []);
  const foundersWithChildren = founders.filter((founder) => founder.children?.length > 0);
  const showBranches =
    founderChildren.length > 0 &&
    foundersWithChildren.some((founder) => expandedIds.has(founder.id));

  return (
    <div className="flex items-start shrink-0">
      <div className="flex items-start gap-2">
        {founders.map((founder) => {
          const hasChildren = founder.children?.length > 0;
          const isExpanded = expandedIds.has(founder.id);

          return (
            <OrgMemberCardHorizontal
              key={founder.id}
              node={founder}
              hasChildren={hasChildren}
              isExpanded={isExpanded}
              onToggle={() => onToggle(founder.id)}
            />
          );
        })}
      </div>

      {showBranches && (
        <>
          <div className="w-4 xl:w-5 flex shrink-0 pt-5" aria-hidden="true">
            <div className="w-full h-px bg-[#C75550]/35" />
          </div>

          <div className="flex flex-col justify-start gap-1 relative">
            {founderChildren.length > 1 && (
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-[#C75550]/25"
                aria-hidden="true"
              />
            )}

            {founderChildren.map((child) => (
              <OrgTreeNodeHorizontal
                key={child.id}
                node={child}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function OrgDesktopTree({ tree, expandedIds, onToggle }) {
  const founders = tree.filter(isFounderNode);
  const nonFounders = tree.filter((node) => !isFounderNode(node));
  const groupFounders = founders.length > 1;

  return (
    <div className="inline-flex items-start gap-6 min-w-max py-2 pr-4">
      {groupFounders && <OrgFounderGroup founders={founders} expandedIds={expandedIds} onToggle={onToggle} />}

      {!groupFounders &&
        founders.map((node) => (
          <OrgTreeNodeHorizontal
            key={node.id}
            node={node}
            expandedIds={expandedIds}
            onToggle={onToggle}
            isRoot
          />
        ))}

      {nonFounders.map((node) => (
        <OrgTreeNodeHorizontal
          key={node.id}
          node={node}
          expandedIds={expandedIds}
          onToggle={onToggle}
          isRoot
        />
      ))}
    </div>
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
              <div className="border border-[#e5e7eb] bg-[#f9fafb] p-4 sm:p-6 lg:p-5">
                {/* Mobile / tablet: vertical tree with avatars */}
                <ul className="flex flex-col gap-3 w-full lg:hidden">
                  {tree.map((node) => (
                    <OrgTreeNodeVertical
                      key={node.id}
                      node={node}
                      expandedIds={expandedIds}
                      onToggle={handleToggle}
                    />
                  ))}
                </ul>

                {/* Desktop: horizontal scrollable tree, small cards, no images */}
                <div className="hidden lg:block overflow-auto pb-2 max-h-[80vh]">
                  <OrgDesktopTree
                    tree={tree}
                    expandedIds={expandedIds}
                    onToggle={handleToggle}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
