"use client";

// Mathematical coordinates for a clean neural / feature graph
const nodes = [
  { id: 1, x: 18, y: 22, r: 3.5, label: "X₁" },
  { id: 2, x: 46, y: 16, r: 3, label: "X₂" },
  { id: 3, x: 80, y: 26, r: 3.5, label: "X₃" },
  { id: 4, x: 24, y: 52, r: 3.5, label: "H₁" },
  { id: 5, x: 52, y: 48, r: 5, label: "θ", core: true },
  { id: 6, x: 82, y: 54, r: 3.5, label: "H₂" },
  { id: 7, x: 36, y: 82, r: 3.5, label: "ŷ" },
  { id: 8, x: 72, y: 80, r: 3.5, label: "Loss", secondary: true },
];

const edges = [
  [1, 4], [1, 5], [2, 4], [2, 5], [2, 6], [3, 5], [3, 6],
  [4, 7], [5, 7], [5, 8], [6, 8], [7, 8]
];

export default function DataLattice() {
  return (
    <div 
      className="absolute -inset-6 sm:-inset-10 pointer-events-none select-none opacity-50 md:opacity-75 overflow-hidden -z-10"
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="edgeGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="edgeGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {edges.map(([fromId, toId], i) => {
          const from = nodes.find(n => n.id === fromId);
          const to = nodes.find(n => n.id === toId);
          if (!from || !to) return null;
          const isAmberEdge = fromId === 8 || toId === 8;
          return (
            <line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isAmberEdge ? "url(#edgeGradAmber)" : "url(#edgeGradCyan)"}
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
            {/* Outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 2}
              fill="none"
              stroke={node.core ? "#0ea5e9" : node.secondary ? "#f59e0b" : "rgba(255,255,255,0.12)"}
              strokeWidth="0.5"
              opacity="0.6"
            />
            {/* Inner node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.core ? "#0ea5e9" : node.secondary ? "#f59e0b" : "#0f172a"}
              stroke={node.core ? "#38bdf8" : node.secondary ? "#fbbf24" : "rgba(255,255,255,0.25)"}
              strokeWidth="0.75"
            />
            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 0.8}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={node.core || node.secondary ? "#090d16" : "#94a3b8"}
              fontSize="2.3"
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
