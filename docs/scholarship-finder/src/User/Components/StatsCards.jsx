import React, { useEffect, useState } from "react";
import styles from "./StatsCards.module.css";
import { getUserData, getCurrentUserId } from "../utlis/userstorage";

function StatsCards({ title, userMode = false }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (userMode) {
      const userId = getCurrentUserId();
      const user = getUserData(userId);

      if (title === "Matching Scholarships") {
        setValue(user?.matchedScholarships?.length || 0);
      } else if (title === "Applications Submitted") {
        setValue(user?.submittedApplications?.length || 0);
      }
    }
  }, [title, userMode]);

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatsCards;
