import styles from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
      <img src={props.image} alt="avatar" className={styles.avatar} />
      <div className={styles.userName}>{props.userName}</div>
    </div>
  )
}

export default ProfileInfo