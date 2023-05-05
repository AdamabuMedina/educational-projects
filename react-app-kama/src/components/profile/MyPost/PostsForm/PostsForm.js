import React from 'react';
import styles from "../MyPosts.module.css"
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../redux/state';

const PostsForm = (props) => {
  const newPostElement = React.createRef()

  const addPost = () => {
    const action = addPostActionCreator();
    props.dispatch(action)
  }

  const postOnChange = () => {
    let text = newPostElement.current.value
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
  }

  return (
    <form className={styles.postsForm} onChange={e => e.preventDefault()}>
      <textarea
        ref={newPostElement}
        placeholder="Введите свой комментарий"
        className={styles.postsTextarea}
        onChange={postOnChange}
        value={props.newPostText} />
      <button className={styles.postsAddButton} onClick={addPost} type="button">Add post</button>
    </form>
  )

}

export default PostsForm