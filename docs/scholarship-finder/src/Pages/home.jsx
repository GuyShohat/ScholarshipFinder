import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Scholarship Finder</h1>

      <div className={styles.buttons}>
        <Link to="/admin/login">
          <button className={styles.adminBtn}>Go to Admin Dashboard</button>
        </Link>
        <Link to="/user">
          <button className={styles.userBtn}>Go to User Area</button>
        </Link>
      </div>
    </div>
  );
}
