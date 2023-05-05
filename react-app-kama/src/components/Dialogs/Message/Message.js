import styles from "../Dialogs.module.css"

const Message = (props) => {
  return (
    <div>
      <li className={styles.messagesItem}>
        <p>{props.message}</p>
      </li>
    </div>
  )
}

export default Message