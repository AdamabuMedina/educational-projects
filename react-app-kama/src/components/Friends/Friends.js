import styles from "./Friends.module.css"
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsElement = props.state.friends.map(friends => <Friend friends={friends.name} id={friends.id} />
  )

  return (
    <div className={styles.title}>
      <ul className={styles.friendsList}>
        {friendsElement}
      </ul>
    </div>
  )
}

export default Friends