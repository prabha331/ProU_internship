import { useParams, Link } from "react-router-dom";
import Heatmap from "./Heatmap";
import RadarPerformance from "./RadarPerformance";
import TaskListWithPulse from "./TaskListWithPulse";

export default function EmployeePage({ data = [] }) {
  const { id } = useParams();
  const emp = data.find(e => e.id === id);

  if (!emp) {
    return (
      <div>
        <h2>Employee not found</h2>
        <p><Link to="/">Back to dashboard</Link></p>
      </div>
    );
  }

  return (
    <div>
      {/* Header Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12
      }}>
        <div>
          <h1 style={{ margin: 0 }}>{emp.name}</h1>
          <div className="meta" style={{ marginTop: 6 }}>
            {emp.role} · {emp.location}
          </div>
        </div>

        <div>
          <Link to="/">
            <button className="button">Back</button>
          </Link>
        </div>
      </div>

      {/* Employee Detail Section */}
      <div className="employee-detail">
        <p style={{ marginTop: 0 }}>{emp.bio}</p>

        {/* Grid layout: Tasks + Radar Performance */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 16
        }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Tasks</h3>
            <TaskListWithPulse tasks={emp.tasks} />
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Performance</h3>

            {/* IMPORTANT: Pass correct props here */}
            <RadarPerformance
              employee={emp}
              allEmployees={data}
            />
          </div>
        </div>

        {/* Heatmap */}
        <Heatmap tasks={emp.tasks} />
      </div>
    </div>
  );
}
