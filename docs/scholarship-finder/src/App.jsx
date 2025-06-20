import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import Home from "./Pages/home";
import AdminLogin from "./Admin/Pages/AdminLogin";
import UserHome from "./User/Pages/UserHome";
import UserLogin from "./User/Pages/UserLogin";
import UserDashboard from "./User/Pages/UserDashboard"; 
import UserHelp from "./User/Pages/UserHelp";
import UserSettings from "./User/Pages/UserSettings";
import UserAddScholarship from "./User/Pages/UserAddScholarship";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* אדמין */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* יוזר */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/dashboard" element={<UserDashboard />} /> {}
        <Route path="/user/help" element={<UserHelp />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/add" element={<UserAddScholarship />} />
        {/* דף דיפולט */}
        <Route
          path="*"
          element={
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}>
              <h1>Scholarship Finder</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
