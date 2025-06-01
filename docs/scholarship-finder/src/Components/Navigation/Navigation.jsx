import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>בית</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>אודות</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>צור קשר</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
