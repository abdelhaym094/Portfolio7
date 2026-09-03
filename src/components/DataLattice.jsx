"use client";

// Discrete mathematical coordinates for a clean neural / feature graph
const nodes = [
  { id: 1, x: 18, y: 22, r: 4, label: "X₁" },
  { id: 2, x: 45, y: 16, r: 3, label: "X₂" },
  { id: 3, x: 78, y: 26, r: 4, label: "X₃" },
  { id: 4, x: 26, y: 52, r: 3.5, label: "H₁" },
  { id: 5, x: 54, y: 48, r: 5, label: "θ", core: true },
  { id: 6, x: 82, y: 55, r: 3.5, label: "H₂" },
  { id: 7, x: 38, y: 82, r: 4, label: "ŷ" },
  { id: 8, x: 70, y: 80, r: 4, label: "Loss" },
];

const edges = [
  [1, 4], [1, 5], [2, 4], [2, 5], [2, 6], [3, 5], [3, 6],
  [4, 7], [5, 7], [5, 8], [6, 8], [7, 8]
];

export default function DataLattice() {
  return (
    <div 
      className="absolute -inset-6 sm:-inset-10 pointer-events-none select-none opacity-40 md:opacity-60 overflow-hidden -z-10"
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full preserve-3d"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#71717a" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {edges.map(([fromId, toId], i) => {
          const from = nodes.find(n => n.id === fromId);
          const to = nodes.find(n => n.id === toId);
          if (!from || !to) return null;
          return (
            <line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#edgeGrad)"
              strokeWidth="0.75"
              strokeDasharray="2 2"
              className="animate-pulse"
              style={{ animationDuration: `${3 + (i % 3)}s` }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 2}
              fill="none"
              stroke={node.core ? "#facc15" : "rgba(255,255,255,0.15)"}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.core ? "#facc15" : "#18181b"}
              stroke={node.core ? "#facc15" : "rgba(255,255,255,0.3)"}
              strokeWidth="0.75"
            />
            <text
              x={node.x}
              y={node.y + 0.9}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={node.core ? "#09090b" : "#a1a1aa"}
              fontSize="2.4"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
