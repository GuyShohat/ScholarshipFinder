import React, { useEffect, useState } from "react";
import StatsCards from "../Components/StatsCards";
import RecentApplications from "../Components/RecentApplications";
import { Link, Navigate } from "react-router-dom";
import styles from "./UserDashboard.module.css";

function UserDashboard() {
  const [savedScholarships, setSavedScholarships] = useState([]);
  const [submittedApplications, setSubmittedApplications] = useState([]);

  // 🧠 הגנה: אם לא מחובר, להפנות לדף התחברות
  // בתחילת הפונקציה:
if (localStorage.getItem("isUserAuthenticated") !== "true") {
  return <Navigate to="/user/login" replace />;
}


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userSavedScholarships") || "[]");
    const submitted = JSON.parse(localStorage.getItem("userSubmittedApplications") || "[]");
    setSavedScholarships(saved);
    setSubmittedApplications(submitted);
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>User Dashboard</h2>

      <div className={styles.mainContent}>
        <div className={styles.stats}>
          <StatsCards title="Saved Scholarships" value={savedScholarships.length} />
          <StatsCards title="Applications Submitted" value={submittedApplications.length} />
        </div>

        <RecentApplications userMode={true} />
      </div>

      <div className={styles.footerLinks}>
        <h3>Quick Links</h3>
        <ul className={styles.linksList}>
          <li><Link to="/user/scholarships">Browse Scholarships</Link></li>
          <li><Link to="/user/settings">Settings</Link></li>
          <li><Link to="/user/help">Help Center</Link></li>
        </ul>

        <div className={styles.backToHome}>
          <button
            onClick={() => {
              localStorage.removeItem("isUserAuthenticated");
              window.location.href = "/user/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
