import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { employees as mockEmployees } from "./data/mockData";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";
import EmployeePage from "./components/EmployeePage";
import "./styles/main.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "", role: "", sort: "" });
  const [theme, setTheme] = useState(() => localStorage.getItem("prou_theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("prou_theme", theme);
  }, [theme]);

  return (
    <div className="app">
      {/* pass data so Header can suggest */}
      <Header
        employees={mockEmployees}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
        setTheme={setTheme}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterBar filters={filters} setFilters={setFilters} />
              <main>
                <Dashboard data={mockEmployees} searchTerm={searchTerm} filters={filters} />
              </main>
            </>
          }
        />

        <Route path="/employee/:id" element={<EmployeePage data={mockEmployees} />} />

        <Route
          path="*"
          element={
            <>
              <FilterBar filters={filters} setFilters={setFilters} />
              <main>
                <Dashboard data={mockEmployees} searchTerm={searchTerm} filters={filters} />
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}
