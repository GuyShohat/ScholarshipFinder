import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1>ברוך הבא לאתר המלגות</h1>
      <p>כאן תוכל למצוא את כל המידע על מלגות רלוונטיות עבורך</p>
    </div>
  );
}

export default Home;
