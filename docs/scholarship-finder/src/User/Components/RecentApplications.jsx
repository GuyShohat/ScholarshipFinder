// src/User/Components/RecentApplications.jsx
import React from "react";
import styles from "./RecentApplications.module.css";

function RecentApplications() {
  const applications = JSON.parse(localStorage.getItem("userSubmittedApplications") || "[]");

  return (
    <div className={styles.recent}>
      <h3>Recent Applications</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Scholarship</th>
            <th>Status</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan="3">No applications found.</td>
            </tr>
          ) : (
            applications.slice(0, 5).map((app, index) => (
              <tr key={index}>
                <td>{app.title}</td>
                <td>{app.status}</td>
                <td>{app.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;
