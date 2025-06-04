import React, { useEffect, useState } from "react";
import styles from "./RecentApplications.module.css";
import { getCurrentUserId, getUserData } from "../utlis/userstorage";

function RecentApplications({ userMode = true }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (userMode) {
      const userId = getCurrentUserId();
      if (!userId) {
        setApplications([]);
        return;
      }

      const user = getUserData(userId);
      setApplications(user?.submittedApplications || []);
    } else {
      const data = JSON.parse(localStorage.getItem("adminRecentApplications") || "[]");
      setApplications(data);
    }
  }, [userMode]);

  return (
    <div className={styles.recentApplications}>
      <h3>Recent Applications</h3>
      {applications.length === 0 ? (
        <p>No recent applications found.</p>
      ) : (
        <ul className={styles.list}>
          {applications.slice(0, 5).map((app, index) => (
            <li key={index} className={styles.item}>
              <div>
                <strong>{app.title || app.scholarshipName || "Untitled"}</strong> – Status: {app.status}
              </div>
              <button
                className={styles.detailsBtn}
                onClick={() =>
                  alert(
                    `📄 Scholarship Details:\n\n` +
                    `Title: ${app.title || "N/A"}\n` +
                    `Description: ${app.description || "N/A"}\n` +
                    `Amount: ${app.amount || "N/A"}\n` +
                    `Deadline: ${app.deadline || "N/A"}\n` +
                    `Matching Type: ${app.matchingChoice || "N/A"}\n` +
                    `Applicant: ${app.applicantName || "N/A"}`
                  )
                }
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentApplications;
