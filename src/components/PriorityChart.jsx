import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function PriorityChart({ tasks }) {
  const data = [
    { name: "High", value: tasks.filter(t => t.priority === "High").length },
    { name: "Medium", value: tasks.filter(t => t.priority === "Medium").length },
    { name: "Low", value: tasks.filter(t => t.priority === "Low").length }
  ].filter(d => d.value > 0); // hide zero slices optionally

  const COLORS = ["#ef4444", "#f59e0b", "#10b981"];

  if (data.length === 0) {
    return <div style={{ padding: 12 }}>No tasks to show</div>;
  }

  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} label>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
