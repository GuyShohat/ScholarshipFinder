import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li><Link to="/">בית</Link></li>
        <li><Link to="/about">אודות</Link></li>
        <li><Link to="/contact">צור קשר</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
