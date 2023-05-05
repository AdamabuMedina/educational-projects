import logoImage from "../../logo.png"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={logoImage} className={styles.logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header