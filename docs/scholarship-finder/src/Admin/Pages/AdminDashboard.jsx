import React, { useEffect, useState } from 'react';
import styles from './AdminDashboard.module.css';
import RecentApplications from "../Components/RecentApplication.jsx";
import StatsCards from '../Components/StatsCards.jsx';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [totalScholarships, setTotalScholarships] = useState(0);
  const [pendingApplications, setPendingApplications] = useState(0);
  const [newUsers, setNewUsers] = useState(0);

  useEffect(() => {
    
    const sch = JSON.parse(localStorage.getItem("adminScholarships") || "[]");
    setTotalScholarships(sch.length);

    
    const users = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    setNewUsers(users.length);

    
    const pending = users.filter(u => u.role === "Pending").length;
    setPendingApplications(pending);
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>

      <div className={styles.mainContent}>
        <div className={styles.stats}>
          <StatsCards title="Total Scholarships" value={totalScholarships} />
          <StatsCards title="Applications Pending" value={pendingApplications} />
          <StatsCards title="New Users" value={newUsers} />
        </div>

        <RecentApplications />
      </div>

      <div className={styles.footerLinks}>
        <h3>Quick Links</h3>
        <ul className={styles.linksList}>
          <li><Link to="/admin/scholarships">Manage Scholarships</Link></li>
          <li><Link to="/admin/applications">View Applications</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/admin/help">Help Center</Link></li>
        </ul>

        <div className={styles.backToHome}>
  <button
    onClick={() => {
      localStorage.removeItem("isAdminAuthenticated");
      window.location.href = "/admin/login";
    }}
  >
    Logout
  </button>
</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
