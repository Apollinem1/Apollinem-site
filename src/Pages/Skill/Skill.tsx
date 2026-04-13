import React, { useMemo, useState, useCallback } from "react";
import "./Skill.css";
import { store } from "../../stores/store";
import { observer } from "mobx-react-lite";

type NodeKind = "hub" | "tech" | "soft";

type GraphNode = {
  id: string;
  label: string;
  kind: NodeKind;
  x: number;
  y: number;
};

type GraphEdge = { from: string; to: string };

const NODES: GraphNode[] = [
  { id: "you", label: "[REPLACE] Вы", kind: "hub", x: 200, y: 118 },
  { id: "react", label: "React", kind: "tech", x: 72, y: 42 },
  { id: "ts", label: "TypeScript", kind: "tech", x: 158, y: 28 },
  { id: "node", label: "Node.js", kind: "tech", x: 248, y: 36 },
  { id: "next", label: "Next.js", kind: "tech", x: 332, y: 52 },
  { id: "css", label: "CSS / a11y", kind: "tech", x: 38, y: 108 },
  { id: "git", label: "Git", kind: "tech", x: 358, y: 118 },
  { id: "docker", label: "Docker", kind: "tech", x: 348, y: 178 },
  { id: "sql", label: "SQL", kind: "tech", x: 268, y: 198 },
  { id: "comm", label: "[REPLACE] Коммуникация", kind: "soft", x: 108, y: 208 },
  { id: "eng", label: "[REPLACE] EN B2+", kind: "soft", x: 200, y: 228 },
  { id: "mentor", label: "[REPLACE] Менторство", kind: "soft", x: 292, y: 208 },
];

const EDGES: GraphEdge[] = [
  { from: "you", to: "react" },
  { from: "you", to: "ts" },
  { from: "you", to: "node" },
  { from: "you", to: "next" },
  { from: "you", to: "css" },
  { from: "you", to: "git" },
  { from: "you", to: "docker" },
  { from: "you", to: "sql" },
  { from: "you", to: "comm" },
  { from: "you", to: "eng" },
  { from: "you", to: "mentor" },
  { from: "react", to: "ts" },
  { from: "ts", to: "node" },
  { from: "node", to: "next" },
  { from: "docker", to: "sql" },
  { from: "comm", to: "mentor" },
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

function neighborSet(nodeId: string): Set<string> {
  const s = new Set<string>([nodeId]);
  EDGES.forEach(({ from, to }) => {
    if (from === nodeId) s.add(to);
    if (to === nodeId) s.add(from);
  });
  return s;
}

function ObsidianGraph({ isLight }: { isLight: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const activeNeighbors = useMemo(
    () => (hovered ? neighborSet(hovered) : null),
    [hovered]
  );

  const dim = useCallback(
    (id: string) => {
      if (!activeNeighbors) return 1;
      return activeNeighbors.has(id) ? 1 : 0.2;
    },
    [activeNeighbors]
  );

  const edgeOpacity = useCallback(
    (from: string, to: string) => {
      if (!activeNeighbors) return 0.38;
      const hit = activeNeighbors.has(from) && activeNeighbors.has(to);
      return hit ? 0.92 : 0.07;
    },
    [activeNeighbors]
  );

  const strokeTech = isLight ? "rgba(91, 33, 182, 0.55)" : "rgba(167, 139, 250, 0.5)";
  const strokeSoft = isLight ? "rgba(16, 185, 129, 0.55)" : "rgba(52, 211, 153, 0.45)";
  const strokeMix = isLight ? "rgba(100, 100, 130, 0.38)" : "rgba(160, 160, 210, 0.32)";

  return (
    <svg
      className="obs-graph__svg"
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Граф навыков: технологии и софт-скиллы. Наведите на узел."
    >
      <defs>
        <filter id="obs-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hubGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#b22fa3" />
        </linearGradient>
        <linearGradient id="hubGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
      </defs>

      <g className="obs-graph__edges">
        {EDGES.map((e, i) => {
          const a = nodeMap[e.from];
          const b = nodeMap[e.to];
          if (!a || !b) return null;
          const isSoftEdge = a.kind === "soft" || b.kind === "soft";
          const stroke = isSoftEdge ? strokeSoft : strokeMix;
          return (
            <line
              key={`${e.from}-${e.to}-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={stroke}
              strokeWidth={isSoftEdge ? 1.5 : 1.25}
              opacity={edgeOpacity(e.from, e.to)}
            />
          );
        })}
      </g>

      <g className="obs-graph__nodes">
        {NODES.map((n) => {
          const r = n.kind === "hub" ? 24 : n.kind === "soft" ? 15 : 14;
          const op = dim(n.id);
          const fillHub = isLight ? "url(#hubGradLight)" : "url(#hubGradDark)";

          return (
            <g
              key={n.id}
              transform={`translate(${n.x}, ${n.y})`}
              style={{ opacity: op }}
              className="obs-graph__node"
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {n.kind === "hub" ? (
                <circle r={r} fill={fillHub} filter="url(#obs-glow)" />
              ) : n.kind === "soft" ? (
                <circle
                  r={r}
                  fill={isLight ? "rgba(16, 185, 129, 0.18)" : "rgba(16, 185, 129, 0.16)"}
                  stroke={strokeSoft}
                  strokeWidth="2"
                />
              ) : (
                <circle
                  r={r}
                  fill={isLight ? "rgba(91, 33, 182, 0.1)" : "rgba(115, 34, 190, 0.18)"}
                  stroke={strokeTech}
                  strokeWidth="2"
                />
              )}
              <text
                className={
                  n.kind === "hub"
                    ? "obs-graph__label obs-graph__label--hub"
                    : "obs-graph__label"
                }
                textAnchor="middle"
                dominantBaseline="middle"
                y={0}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export const Skill = observer(() => {
  const isLight = store.theme;

  return (
    <div
      className={`skill-obsidian ${
        isLight ? "skill-obsidian--light" : "skill-obsidian--dark"
      }`}
    >
      <header className="skill-obsidian__head">
        <span className="skill-obsidian__tag">GRAPH_VIEW</span>
        <h2 className="skill-obsidian__title">
          [REPLACE] Стек и связи — наведите на узел
        </h2>
      </header>

      <div className="skill-obsidian__canvas">
        <ObsidianGraph isLight={isLight} />
      </div>

      <footer className="skill-obsidian__legend">
        <span className="skill-obsidian__lg skill-obsidian__lg--tech">
          <i /> техстек
        </span>
        <span className="skill-obsidian__lg skill-obsidian__lg--soft">
          <i /> софт-скиллы
        </span>
        <span className="skill-obsidian__lg skill-obsidian__lg--hub">
          <i /> фокус
        </span>
      </footer>
    </div>
  );
});
