import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.css";
import UserHeader from "../Components/userHeader";
import StatsCards from "../Components/StatsCards";
import RecentApplications from "../Components/RecentApplications";
import { getCurrentUserId, getUserData } from "../utlis/userstorage";
import { useNavigate } from "react-router-dom";
import DeadlineChart from "../Components/DeadlineChart";
import { logoutUser } from "../utlis/userstorage";
export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = getCurrentUserId();
    if (!userId) {
      setLoading(false);
      return;
    }

    const userData = getUserData(userId);
    if (userData) {
      setUser(userData);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <p>Loading user data...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.dashboard}>
        <p>User not found. Please log in again.</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <UserHeader />

      <h1 className={styles.title}>Welcome back, {user.settings?.firstName || "User"}!</h1>

      <div className={styles.actionsRow}>
        <button
          className={styles.addBtn}
          onClick={() => navigate("/user/add")}
        >
          + Add New Scholarship
        </button>
      </div>

      <div className={styles.statsRow}>
        <StatsCards title="Matching Scholarships" userMode={true} />
        <StatsCards title="Applications Submitted" userMode={true} />
      </div>

      <div className={styles.section}>
        <h2>Recent Applications</h2>
        <RecentApplications userMode={true} />
      </div>

    <div className={styles.section}>
  <h2>Upcoming Deadlines</h2>
  <DeadlineChart />
</div>

      <div className={styles.logoutContainer}>
  <button className={styles.logoutBtn} onClick={() => {
    logoutUser();
    navigate("/user/login");
  }}>
    Sign Out
  </button>
</div>
    </div>
  );
}
