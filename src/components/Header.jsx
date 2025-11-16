import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

function debounce(fn, delay = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

export default function Header({ employees = [], searchTerm, setSearchTerm, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [local, setLocal] = useState(searchTerm || "");
  const wrapperRef = useRef();

  useEffect(() => {
    setLocal(searchTerm || "");
  }, [searchTerm]);

  useEffect(() => {
    function onDocClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const computeSuggestions = (q) => {
    if (!q) return setSuggestions([]);
    const term = q.toLowerCase();
    const found = [];
    const pushUnique = (s) => {
      if (found.findIndex(x => x.type === s.type && x.value === s.value) === -1) found.push(s);
    };

    employees.forEach(e => {
      if (e.name.toLowerCase().includes(term)) pushUnique({ type: "name", value: e.name });
      if (e.role.toLowerCase().includes(term)) pushUnique({ type: "role", value: e.role });
      if (e.location.toLowerCase().includes(term)) pushUnique({ type: "location", value: e.location });
    });

    
    setSuggestions(found.slice(0, 8));
  };

  const debounced = useRef(debounce(computeSuggestions, 180)).current;

  function onChange(e) {
    const v = e.target.value;
    setLocal(v);
    setOpen(true);
    debounced(v);
    setSearchTerm(v);
  }

  function onPick(s) {
    setLocal(s.value);
    setSearchTerm(s.value);
    setOpen(false);
  }

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <header className="header fade-in" ref={wrapperRef}>
      <div className="app-title">
        <div className="logo">ProU</div>
        <div>
          <h2 style={{ margin: 0 }}>ProU Dashboard</h2>
          <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: 13 }}>Frontend Challenge</p>
        </div>
      </div>

      <div style={{ position: "relative", flex: 1, display: "flex", justifyContent: "center" }}>
        <input
          className="search-input"
          placeholder="Search by name, role or location..."
          value={local}
          onChange={onChange}
          onFocus={() => { setOpen(true); debounced(local); }}
          aria-label="Search employees"
        />

        {open && suggestions.length > 0 && (
          <div style={{
            position: "absolute",
            top: "46px",
            width: "520px",
            maxWidth: "calc(100% - 40px)",
            background: "var(--card)",
            boxShadow: "var(--shadow)",
            borderRadius: 8,
            zIndex: 60,
            padding: 8
          }}>
            {suggestions.map((s, idx) => (
              <div
                key={`${s.type}-${s.value}-${idx}`}
                onClick={() => onPick(s)}
                style={{
                  padding: "8px 10px",
                  cursor: "pointer",
                  borderRadius: 6,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                onMouseDown={(e) => e.preventDefault()} 
              >
                <div style={{ fontSize: 14 }}>
                  <strong style={{ marginRight: 8 }}>{s.value}</strong>
                  <span style={{ color: "var(--text-secondary)", fontSize: 13 }}>{s.type}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>Use</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  employees: PropTypes.array,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  theme: PropTypes.string,
  setTheme: PropTypes.func
};
