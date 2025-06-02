import React from 'react';
import styles from './AdminHelp.module.css';
import BackToDashboard from "../Components/BackToDashboard";
function AdminHelp() {
  return (
    <div className={styles.container}>
      <h1>Help Center (Admin)</h1>
      <p className={styles.text}>
        This section is designed to assist administrators with managing the system. Here you can find documentation, guides, and contact information for support.
      </p>
      <div className={styles.links}>
        <a href="#">View Documentation</a>
        <a href="#">Admin Guidelines</a>
        <a href="#">Contact Technical Support</a>
      </div>
      <BackToDashboard />
    </div>
  );
}

export default AdminHelp;
