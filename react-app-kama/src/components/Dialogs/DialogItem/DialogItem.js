import { NavLink } from "react-router-dom"
import styles from "../Dialogs.module.css"

const Dialog = (props) => {
  let path = `/dialogs/${props.id}`

  return (
    <li className={styles.dialogsItem}>
      <NavLink to={path} className={styles.dialogsLink}>{props.name}</NavLink>
    </li>
  )
}

export default Dialog