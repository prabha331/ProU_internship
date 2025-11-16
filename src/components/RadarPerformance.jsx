import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

export default function RadarPerformance({ employee, allEmployees }) {
  if (!employee || !allEmployees) return null;

  const tasks = Array.isArray(employee.tasks) ? employee.tasks : [];
  const total = tasks.length || 1;

  const completed = tasks.filter(t => t.status === "completed").length;
  const high = tasks.filter(t => t.priority === "high").length;
  const overdue = tasks.filter(t => new Date(t.dueDate) < new Date()).length;

  const upcoming = tasks.filter(t => {
    const now = new Date();
    const due = new Date(t.dueDate);
    const diff = (due - now) / (1000 * 60 * 60 * 24);
    return diff > 0 && diff <= 7;
  }).length;

  const maxTasks = Math.max(...allEmployees.map(e =>
    Array.isArray(e.tasks) ? e.tasks.length : 0
  ), 1);

  const workloadScore = (total / maxTasks) * 100;

  const cleanData = [
    { metric: "Completion%", value: Math.min((completed / total) * 100, 100) },
    { metric: "High Priority%", value: Math.min((high / total) * 100, 100) },
    { metric: "Punctuality%", value: Math.min(((total - overdue) / total) * 100, 100) },
    { metric: "Upcoming%", value: Math.min((upcoming / total) * 100, 100) },
    { metric: "Workload%", value: Math.min(workloadScore, 100) },
  ];

  return (
    <div style={{
      width: "430px",         
      overflow: "visible",
      display: "flex",
      justifyContent: "flex-end",   
      paddingRight: "30px",         
    }}>
      <RadarChart
        cx={190}       
        cy={145}
        outerRadius={105}
        width={430}
        height={300}
        data={cleanData}
      >
        <PolarGrid stroke="rgba(200,200,200,0.35)" />

        <PolarAngleAxis
          dataKey="metric"
          tick={{ fill: "var(--text)", fontSize: 11 }}
        />

        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: "var(--muted)", fontSize: 9 }}
          stroke="rgba(180,180,180,0.3)"
        />

        <Radar
          dataKey="value"
          stroke="#60a5fa"
          fill="#60a5fa"
          fillOpacity={0.45}
        />

        <Tooltip />
      </RadarChart>
    </div>
  );
}
