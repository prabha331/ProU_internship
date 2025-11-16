import { useMemo, useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import SkeletonCard from "./SkeletonCard";

export default function Dashboard({ data, searchTerm, filters }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, [data]);

  const filtered = useMemo(() => {
    const term = (searchTerm || "").toLowerCase().trim();
    let list = data.slice();

    if (filters.status) list = list.filter(e => e.status === filters.status);
    if (filters.role) list = list.filter(e => e.role === filters.role);
    if (term) {
      list = list.filter(e =>
        e.name.toLowerCase().includes(term) ||
        e.role.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term)
      );
    }
    if (filters.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (filters.sort === "location") list.sort((a, b) => a.location.localeCompare(b.location));

    return list;
  }, [data, searchTerm, filters]);

  if (loading) {
    return (
      <div className="grid">
        {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (filtered.length === 0) {
    return <div style={{ padding: 20, textAlign: "center" }}>No results. Try another filter or search.</div>;
  }

  return (
    <div className="grid" role="list">
      {filtered.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}
    </div>
  );
}
