import React, { useEffect, useState } from 'react';
import styles from './AdminApplications.module.css';
import BackToDashboard from "../Components/BackToDashboard";

function AdminApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("adminUsers");
    if (saved) {
      const users = JSON.parse(saved);
      const mapped = users.map(user => ({
        id: user.id,
        name: user.name,
        scholarship: user.scholarship,
        date: formatDate(user.date || generateRandomDateBeforeScholarship(user.scholarship)),
        status: user.role || "Pending"
      }));
      setApplications(mapped);
    }
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const generateRandomDateBeforeScholarship = (scholarshipType) => {
    const scholarships = JSON.parse(localStorage.getItem("adminScholarships") || "[]");
    const match = scholarships.find(s => s.type === scholarshipType);
    const deadline = new Date(match?.deadline || "2025-12-31");
    const daysBefore = Math.floor(Math.random() * 30) + 1;
    deadline.setDate(deadline.getDate() - daysBefore);
    return deadline.toISOString();
  };

  return (
    <div className={styles.container}>
      <h1>All Applications</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant</th>
            <th>Scholarship</th>
            <th>Submitted</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>{app.scholarship}</td>
              <td>{app.date}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackToDashboard />
    </div>
  );
}

export default AdminApplications;
