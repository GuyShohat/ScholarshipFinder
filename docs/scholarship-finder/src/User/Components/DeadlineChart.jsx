import React from "react";
import { getCurrentUserId, getUserData } from "../utlis/userstorage";
import styles from "./DeadlineChart.module.css";

export default function DeadlineChart() {
  const userId = getCurrentUserId();
  const user = getUserData(userId);
  const applications = user?.submittedApplications || [];

  const deadlines = applications
    .filter(app => typeof app.deadline === "string" && app.deadline.includes("/"))
    .map(app => ({
      title: app.title || "Untitled",
      deadline: app.deadline,
      amount: app.amount || "-",
      match: app.matchingChoice || "-"
    }))
    .sort((a, b) => {
      const [d1, m1, y1] = a.deadline.split("/");
      const [d2, m2, y2] = b.deadline.split("/");
      return new Date(`${y1}-${m1}-${d1}`) - new Date(`${y2}-${m2}-${d2}`);
    });
  if (deadlines.length === 0) {
    return <p style={{ textAlign: "center", color: "#777" }}>No upcoming deadlines found.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Deadline</th>
          <th>Selected</th>
        </tr>
      </thead>
      <tbody>
        {deadlines.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.amount} ₪</td>
            <td>{item.deadline}</td>
            <td>{item.match}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
