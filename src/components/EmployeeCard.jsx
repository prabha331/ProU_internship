import { Link } from "react-router-dom";

export default function EmployeeCard({ employee }) {
  return (
    <article className="card fade-in" aria-labelledby={`emp-${employee.id}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 id={`emp-${employee.id}`} style={{ margin: "0 0 6px 0" }}>
            {employee.name}
          </h3>
          <div className="meta">{employee.role} · {employee.location}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div className="badge">{employee.status}</div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
            {employee.tasks.length} tasks
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 10, justifyContent: "flex-end" }}>
        <Link to={`/employee/${employee.id}`}>
          <button className="button">View</button>
        </Link>
      </div>
    </article>
  );
}
