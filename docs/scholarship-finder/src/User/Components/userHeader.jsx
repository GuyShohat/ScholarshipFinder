import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserHeader.module.css";
import { logoutUser } from "../utlis/userstorage";

export default function UserHeader() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isUserAuthenticated") === "true";
    const userId = localStorage.getItem("currentUserId");

    if (!isAuthenticated || !userId) {
      navigate("/user/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/user/login");
  };

  return (
    <div className={styles.header}>
      <h2>User Panel</h2>

      <nav className={styles.nav}>
        <Link to="/user/settings">Settings</Link>
        <Link to="/user/help">Help</Link>
        
      </nav>
    </div>
  );
}
