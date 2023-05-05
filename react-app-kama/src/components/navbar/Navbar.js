import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.link}>Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.link}>Message</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.link}>News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/media" className={navData => navData.isActive ? styles.active : styles.link}>Media</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/setting" className={navData => navData.isActive ? styles.active : styles.link}>Setting</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/friends" className={navData => navData.isActive ? styles.active : styles.link}>Friends</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar