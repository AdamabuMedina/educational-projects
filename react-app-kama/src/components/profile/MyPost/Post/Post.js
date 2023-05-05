import styles from "./Post.module.css"
import avatar from "../../../../account-avatar.svg"

const Post = (props) => {

  return (
    <li className={styles.postItem}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="avatar" className={styles.userAvatar} />
        <div className={styles.userName}>
          <a href="#user">Adam</a>
        </div>
      </div>
      <p className={styles.userDescription}>{props.message}</p>
      <div className={styles.userLikes}>
        <span className={styles.userLike}>
          <span>{props.likeCount}</span>
          <button className="material-icons">
            thumb_up
          </button>
        </span>
        <span className={styles.userLike}>
          <span>{props.dislikeCount}</span>
          <button className="material-icons" type="submit">
            thumb_down
          </button>
        </span>
      </div>
    </li>
  )
}

export default Post