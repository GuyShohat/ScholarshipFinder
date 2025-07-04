import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AdminScholerships from "../Admin/Pages/AdminScholerships";
import AdminApplications from "../Admin/Pages/AdminApplications";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminHelp from "../Admin/Pages/AdminHelp";
import AdminSettings from "../Admin/Pages/AdminSettings";
import AdminHeader from "../Admin/Components/AdminHeader";

const AdminRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="scholarships" element={<AdminScholerships />} />
        <Route path="applications" element={<AdminApplications />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="help" element={<AdminHelp />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
