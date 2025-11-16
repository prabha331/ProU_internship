// src/components/TaskListWithPulse.jsx
import React from "react";

function PriorityBadge({ priority }) {
  const style = {
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    display: "inline-block",
    marginLeft: 8
  };
  if (priority === "High") return <span style={{ ...style, background: "#fee2e2", color: "#b91c1c", border: "1px solid rgba(185,28,28,0.08)" }}>{priority}</span>;
  if (priority === "Medium") return <span style={{ ...style, background: "#fff7ed", color: "#92400e", border: "1px solid rgba(146,64,14,0.06)" }}>{priority}</span>;
  return <span style={{ ...style, background: "#ecfccb", color: "#166534", border: "1px solid rgba(16,101,38,0.06)" }}>{priority}</span>;
}

export default function TaskListWithPulse({ tasks = [] }) {
  return (
    <div style={{ marginTop: 12 }}>
      <ul style={{ paddingLeft: 18, marginTop: 6 }}>
        {tasks.map(t => (
          <li key={t.id} style={{ marginBottom: 10, lineHeight: 1.4, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <strong>{t.title}</strong>
                <PriorityBadge priority={t.priority} />
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>due {t.due}</div>
            </div>

            {t.priority === "High" && (
              <div style={{ width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="pulse-dot" title="High priority"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
