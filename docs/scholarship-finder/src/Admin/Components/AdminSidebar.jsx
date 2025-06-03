import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminSidebar.module.css';

function AdminSidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link to="/admin/scholarships">Scholarships</Link></li>
          <li><Link to="/admin/applications">Applications</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/admin/help">Help</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
