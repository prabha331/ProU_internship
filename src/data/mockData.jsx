export const employees = [
  {
    id: "e1",
    name: "Asha Kumar",
    role: "Frontend Developer",
    location: "Bengaluru",
    status: "Active",
    bio: "Asha is a frontend developer specializing in React and UI engineering.",
    tasks: [
      { id: "t1", title: "Landing Page Redesign", priority: "High", due: "2025-11-24" },
      { id: "t2", title: "Fix Navbar Animation", priority: "Low", due: "2025-11-26" },
      { id: "t3", title: "UI Review with Design Team", priority: "Medium", due: "2025-11-27" },
      { id: "t4", title: "Accessibility Refactor", priority: "Medium", due: "2025-11-29" },
      { id: "t5", title: "Dark Mode Polish", priority: "High", due: "2025-11-30" }
    ]
  },

  {
    id: "e2",
    name: "Rohit Sharma",
    role: "Backend Developer",
    location: "Hyderabad",
    status: "On Leave",
    bio: "Rohit works on Node.js microservices and system architecture.",
    tasks: [
      { id: "t1", title: "API Rate Limiter", priority: "High", due: "2025-11-22" },
      { id: "t2", title: "MongoDB Index Optimization", priority: "Medium", due: "2025-11-25" },
      { id: "t3", title: "Redis Cache Refresh", priority: "High", due: "2025-11-28" },
      { id: "t4", title: "Auth Migration to JWT", priority: "Medium", due: "2025-11-29" }
    ]
  },

  {
    id: "e3",
    name: "Meera Iyer",
    role: "UI/UX Designer",
    location: "Chennai",
    status: "Active",
    bio: "Meera creates clean, functional interfaces and modern product experiences.",
    tasks: [
      { id: "t1", title: "User Persona Research", priority: "Medium", due: "2025-11-22" },
      { id: "t2", title: "Dashboard Wireframes", priority: "High", due: "2025-11-24" },
      { id: "t3", title: "Figma Prototype Polish", priority: "Medium", due: "2025-11-27" },
      { id: "t4", title: "Design System Tokens", priority: "Low", due: "2025-11-30" }
    ]
  },

  {
    id: "e4",
    name: "Vikram Singh",
    role: "Data Analyst",
    location: "Pune",
    status: "Active",
    bio: "Vikram specializes in BI dashboards and predictive analytics.",
    tasks: [
      { id: "t1", title: "Sales Forecasting", priority: "High", due: "2025-11-23" },
      { id: "t2", title: "Power BI Dashboard", priority: "Medium", due: "2025-11-24" },
      { id: "t3", title: "Data Cleaning Script", priority: "Low", due: "2025-11-26" },
      { id: "t4", title: "Weekly KPI Report", priority: "Medium", due: "2025-11-29" },
      { id: "t5", title: "Ad-hoc Data Request", priority: "Low", due: "2025-12-01" }
    ]
  },

  {
    id: "e5",
    name: "Neha Raj",
    role: "Product Manager",
    location: "Delhi",
    status: "Active",
    bio: "Neha manages product lifecycles and cross-functional coordination.",
    tasks: [
      { id: "t1", title: "Feature Prioritization", priority: "High", due: "2025-11-21" },
      { id: "t2", title: "Sprint Planning", priority: "Medium", due: "2025-11-25" },
      { id: "t3", title: "Customer Feedback Sync", priority: "Low", due: "2025-11-26" },
      { id: "t4", title: "Roadmap Update", priority: "High", due: "2025-11-29" }
    ]
  },

  {
    id: "e6",
    name: "Arjun Desai",
    role: "Full Stack Developer",
    location: "Mumbai",
    status: "Active",
    bio: "Arjun handles full-stack features using MERN and system design.",
    tasks: [
      { id: "t1", title: "Real-time Chat API", priority: "High", due: "2025-11-22" },
      { id: "t2", title: "SSR & SEO Optimization", priority: "Medium", due: "2025-11-24" },
      { id: "t3", title: "Admin Portal Fixes", priority: "Low", due: "2025-11-27" },
      { id: "t4", title: "CI/CD Pipeline Upgrade", priority: "High", due: "2025-11-30" }
    ]
  },

  {
    id: "e7",
    name: "Simran Kaur",
    role: "QA Engineer",
    location: "Chandigarh",
    status: "Active",
    bio: "Simran ensures product quality with functional & automation testing.",
    tasks: [
      { id: "t1", title: "Regression Testing", priority: "Medium", due: "2025-11-23" },
      { id: "t2", title: "Selenium Test Suite", priority: "High", due: "2025-11-24" },
      { id: "t3", title: "Bug Verification", priority: "Medium", due: "2025-11-26" },
      { id: "t4", title: "Performance Testing", priority: "Low", due: "2025-11-28" }
    ]
  },

  {
    id: "e8",
    name: "Zaid Ali",
    role: "DevOps Engineer",
    location: "Noida",
    status: "Active",
    bio: "Zaid works on infrastructure automation, Docker, and Kubernetes.",
    tasks: [
      { id: "t1", title: "K8s Deployment", priority: "High", due: "2025-11-21" },
      { id: "t2", title: "Docker Image Cleanup", priority: "Low", due: "2025-11-25" },
      { id: "t3", title: "Monitor Setup", priority: "Medium", due: "2025-11-28" },
      { id: "t4", title: "Nginx Routing Config", priority: "Medium", due: "2025-11-30" }
    ]
  },

  {
    id: "e9",
    name: "Riya Jain",
    role: "Machine Learning Engineer",
    location: "Kolkata",
    status: "On Leave",
    bio: "Riya builds ML models for forecasting and classification.",
    tasks: [
      { id: "t1", title: "Model Retraining", priority: "High", due: "2025-11-22" },
      { id: "t2", title: "Feature Engineering", priority: "Medium", due: "2025-11-26" },
      { id: "t3", title: "Data Pipeline Check", priority: "Low", due: "2025-11-28" }
    ]
  },

  {
    id: "e10",
    name: "Karthik Reddy",
    role: "Cloud Architect",
    location: "Bengaluru",
    status: "Active",
    bio: "Karthik designs scalable cloud solutions on AWS & GCP.",
    tasks: [
      { id: "t1", title: "VPC Redesign", priority: "High", due: "2025-11-23" },
      { id: "t2", title: "Cloud Cost Optimization", priority: "Medium", due: "2025-11-25" },
      { id: "t3", title: "IAM Audit", priority: "High", due: "2025-11-28" },
      { id: "t4", title: "Lambda Refactor", priority: "Low", due: "2025-11-30" }
    ]
  }
];
