import styles from "../Friends.module.css"
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
  let path = `/friends/${props.id}`

  return (
    <li className={styles.friendItem}>
      <div className={styles.friendAvatar}></div>
      <NavLink to={path} className={styles.friendsLink}>{props.friends}</NavLink>
    </li>
  )
}

export default Friend