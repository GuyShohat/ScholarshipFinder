import React, { useEffect, useState } from 'react';
import styles from './AdminUsers.module.css';
import { Link } from 'react-router-dom';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("adminUsers");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to delete all users?")) {
      localStorage.removeItem("adminUsers");
      setUsers([]);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Users Management</h2>
      <button className={styles.resetButton} onClick={handleReset}>
        Reset Users
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Scholarship</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.scholarship}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/admin/dashboard" className={styles.backLink}>
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default AdminUsers;
