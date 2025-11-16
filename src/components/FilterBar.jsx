export default function FilterBar({ filters, setFilters }) {
  const update = (k, v) => setFilters(prev => ({ ...prev, [k]: v }));

  return (
    <div className="filter-bar" role="region" aria-label="Filters">
      <select
        className="select"
        value={filters.status}
        onChange={e => update("status", e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="On Leave">On Leave</option>
      </select>

      <select
        className="select"
        value={filters.role}
        onChange={e => update("role", e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Backend Developer">Backend Developer</option>
      </select>

      <select
        className="select"
        value={filters.sort}
        onChange={e => update("sort", e.target.value)}
      >
        <option value="">Sort: None</option>
        <option value="name">Name</option>
        <option value="location">Location</option>
      </select>
    </div>
  );
}
