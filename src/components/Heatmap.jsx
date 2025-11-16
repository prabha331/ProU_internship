import React, { useMemo } from "react";


const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const COLORS = ["#e6f4ff", "#cfe9ff", "#99d2ff", "#60a5fa", "#1e90ff"]; // light->strong

function bucketToColor(count, max) {
  if (max === 0) return COLORS[0];
  const idx = Math.min(Math.floor((count / max) * (COLORS.length - 1)), COLORS.length - 1);
  return COLORS[idx];
}

export default function Heatmap({ tasks = [] }) {
  const counts = useMemo(() => {
    const base = Array(7).fill(0);
    tasks.forEach(t => {
      if (!t.due) return;
      const d = new Date(t.due);
      if (isNaN(d)) return;
      base[d.getDay()] += 1;
    });
    return base;
  }, [tasks]);

  const max = Math.max(...counts, 0);

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <strong style={{ fontSize: 14 }}>Workload (by weekday)</strong>
        <div style={{ color: "var(--text-secondary)", fontSize: 13 }}> — tasks due per weekday</div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 8,
        alignItems: "center"
      }}>
        {DAYS.map((d, i) => (
          <div key={d} style={{ textAlign: "center" }}>
            <div
              title={`${counts[i]} tasks`}
              style={{
                height: 40,
                borderRadius: 8,
                background: bucketToColor(counts[i], max),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 -6px 10px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ fontSize: 13, color: "var(--text)" }}>{counts[i] || ""}</div>
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: "var(--text-secondary)" }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
