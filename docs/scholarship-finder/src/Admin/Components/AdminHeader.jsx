import React from 'react';
import styles from './AdminHeader.module.css';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Admin Panel</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/admin/scholarships">Scholarships</Link></li>
          <li><Link to="/admin/applications">Applications</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminHeader;
