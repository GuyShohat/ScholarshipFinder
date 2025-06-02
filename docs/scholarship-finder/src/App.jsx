import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import AdminScholerships from "./Admin/Pages/AdminScholerships";
import AdminApplications from "./Admin/Pages/AdminApplications";
import AdminUsers from "./Admin/Pages/AdminUsers";
import AdminHelp from "./Admin/Pages/AdminHelp";
import AdminSettings from "./Admin/Pages/AdminSettings";
import Home from "./Pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/scholarships" element={<AdminScholerships />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/help" element={<AdminHelp />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {}
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <h1>Scholarship Finder</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
