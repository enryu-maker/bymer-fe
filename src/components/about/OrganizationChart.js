"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchOrgMemberTree, fetchOrgPlants } from "@/lib/api";
import { PageLoader } from "../shared/PageLoader";

const CONNECTOR = "#C7555035";

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

function isFounderNode(node) {
  return /founder/i.test(node.department?.name || "");
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

function ExpandButton({ isExpanded, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "Collapse team" : "Expand team"}
      className="shrink-0 border border-[#e5e7eb] w-6 h-6 flex items-center justify-center text-[#9ca3af] hover:border-[#C75550] hover:text-[#C75550] transition-colors duration-200"
    >
      <i
        className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function OrgTreeCard({ node, hasChildren, isExpanded, onToggle }) {
  const vacant = node.is_vacant || /vacant/i.test(node.name || "");
  const deptColor = node.department?.color || "#C75550";

  return (
    <div className="flex flex-col items-center shrink-0">
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

      {hasChildren && (
        <div className="mt-1">
          <ExpandButton isExpanded={isExpanded} onToggle={() => onToggle(node.id)} />
        </div>
      )}
    </div>
  );
}

function ConnectorDown({ height = 16 }) {
  return (
    <div
      className="w-px shrink-0"
      style={{ height, backgroundColor: CONNECTOR }}
      aria-hidden="true"
    />
  );
}

function ChildrenRow({ children, expandedIds, onToggle }) {
  if (!children.length) return null;

  const childCount = children.length;

  return (
    <div className="flex flex-col items-center">
      <ConnectorDown height={20} />

      <div
        className="relative flex items-start justify-center pt-5"
        style={{ gap: childCount > 1 ? "1rem" : 0 }}
      >
        {childCount > 1 && (
          <div
            className="absolute top-0 h-px"
            style={{
              backgroundColor: CONNECTOR,
              left: `calc(100% / ${childCount * 2})`,
              right: `calc(100% / ${childCount * 2})`,
            }}
            aria-hidden="true"
          />
        )}

        {children.map((child) => (
          <div key={child.id} className="relative flex flex-col items-center px-1 sm:px-2">
            {childCount > 1 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-px"
                style={{ top: -20, height: 20, backgroundColor: CONNECTOR }}
                aria-hidden="true"
              />
            )}
            <OrgTreeNode node={child} expandedIds={expandedIds} onToggle={onToggle} />
          </div>
        ))}
      </div>
    </div>
  );
}

function OrgTreeNode({ node, expandedIds, onToggle }) {
  const hasChildren = node.children?.length > 0;
  const isExpanded = expandedIds.has(node.id);

  return (
    <div className="flex flex-col items-center shrink-0">
      <OrgTreeCard
        node={node}
        hasChildren={hasChildren}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />

      {hasChildren && isExpanded && (
        <ChildrenRow children={node.children} expandedIds={expandedIds} onToggle={onToggle} />
      )}
    </div>
  );
}

function OrgFounderGroup({ founders, expandedIds, onToggle }) {
  const founderChildren = founders.flatMap((founder) => founder.children || []);
  const showBranches =
    founderChildren.length > 0 &&
    founders.some((founder) => founder.children?.length && expandedIds.has(founder.id));

  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="flex items-start gap-2 sm:gap-3">
        {founders.map((founder) => {
          const hasChildren = founder.children?.length > 0;
          const isExpanded = expandedIds.has(founder.id);

          return (
            <OrgTreeCard
              key={founder.id}
              node={founder}
              hasChildren={hasChildren}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          );
        })}
      </div>

      {showBranches && (
        <ChildrenRow children={founderChildren} expandedIds={expandedIds} onToggle={onToggle} />
      )}
    </div>
  );
}

function OrgChartTree({ tree, expandedIds, onToggle }) {
  const founders = tree.filter(isFounderNode);
  const nonFounders = tree.filter((node) => !isFounderNode(node));
  const groupFounders = founders.length > 1;

  const topItems = [];

  if (groupFounders) {
    topItems.push({ key: "founders", type: "founders", founders });
  } else {
    founders.forEach((founder) => {
      topItems.push({ key: founder.id, type: "node", node: founder });
    });
  }

  nonFounders.forEach((node) => {
    topItems.push({ key: node.id, type: "node", node });
  });

  if (topItems.length === 0) return null;

  if (topItems.length === 1 && topItems[0].type === "node") {
    return (
      <div className="inline-flex flex-col items-center min-w-max py-4 px-2">
        <OrgTreeNode node={topItems[0].node} expandedIds={expandedIds} onToggle={onToggle} />
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center min-w-max py-4 px-2">
      <div className="flex items-start justify-center gap-6 sm:gap-10">
        {topItems.map((item) =>
          item.type === "founders" ? (
            <OrgFounderGroup
              key={item.key}
              founders={item.founders}
              expandedIds={expandedIds}
              onToggle={onToggle}
            />
          ) : (
            <OrgTreeNode
              key={item.key}
              node={item.node}
              expandedIds={expandedIds}
              onToggle={onToggle}
            />
          )
        )}
      </div>
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
              <div className="border border-[#e5e7eb] bg-[#f9fafb] p-4 sm:p-6 overflow-auto max-h-[85vh]">
                <div className="flex justify-center min-w-max">
                  <OrgChartTree tree={tree} expandedIds={expandedIds} onToggle={handleToggle} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
