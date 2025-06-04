import React, { useEffect, useState } from 'react';
import styles from './StatsCards.module.css';

function StatCards({ title, value }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800; 
    const frameRate = 30; 
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increment = (value - start) / totalFrames;
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const newValue = Math.round(start + increment * currentFrame);
      setDisplayValue(newValue);

      if (currentFrame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{displayValue}</p>
    </div>
  );
}

export default StatCards;
