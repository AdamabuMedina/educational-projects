import styles from "./Dialogs.module.css"
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';

const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />
  )

  let messagesElements = props.state.messages.map(message => <Message message={message.message} />
  )

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsRight}>
        <ul className={styles.dialogsList}>
          <li className={styles.dialogsTitle}>Диалоги</li>
          {dialogsElements}
        </ul>
      </div>
      <ul className={styles.messagesList}>
        <li className={styles.messageTitle}>Сообщения</li>
        {messagesElements}
        <MessageForm />
      </ul>
    </div>
  )
}

export default Dialogs