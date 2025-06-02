import React, { useEffect, useState } from 'react';
import styles from './RecentApplications.module.css';
import { formatDate } from '../Components/DateUtility';

function RecentApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("adminUsers");
    if (!stored) return;

    const users = JSON.parse(stored);
    const sorted = [...users].sort((a, b) => b.id.localeCompare(a.id));
    const latestThree = sorted.slice(0, 3);

    const generated = latestThree.map(user => {
      const deadline = getScholarshipDeadline(user.scholarship);
      return {
        id: user.id,
        name: user.name,
        date: generateRandomDateBefore(deadline),
        status: getRandomStatus()
      };
    });

    setApplications(generated);
  }, []);

  const getScholarshipDeadline = (type) => {
    const scholarships = JSON.parse(localStorage.getItem("adminScholarships") || "[]");
    const found = scholarships.find(s => s.type === type);
    return found ? found.deadline : "2025-12-31";
  };

  const generateRandomDateBefore = (deadlineStr) => {
    const deadline = new Date(deadlineStr);
    const daysBefore = Math.floor(Math.random() * 30) + 1;
    const result = new Date(deadline);
    result.setDate(deadline.getDate() - daysBefore);
    return result.toISOString().split("T")[0]; 
  };

  const getRandomStatus = () => {
    const statuses = ["Pending", "Approved", "Rejected"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  return (
    <div className={styles.tableContainer}>
      <h3>Recent Applications</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{formatDate(app.date)}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;
