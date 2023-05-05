import React from 'react';
import styles from "../Dialogs.module.css"

const MessageForm = (props) => {

  const newMessageElement = React.createRef()

  const addMessage = () => {
    let textMessage = newMessageElement.current.value
    alert(textMessage)
  }

  return (
    <form className={styles.messageForm} onChange={e => e.preventDefault()}>
      <input className={styles.messageInput} placeholder="Ваше сообщение" ref={newMessageElement}></input>
      <button className={styles.messageAddButton} onClick={addMessage} type="button">Добавить сообщение</button>
    </form>
  )
}

export default MessageForm