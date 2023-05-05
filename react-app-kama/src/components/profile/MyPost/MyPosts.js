import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import PostsForm from './PostsForm/PostsForm';

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} dislikeCount={post.dislikeCount} />)

  return (
    <div className={styles.myPosts} >
      <h3>
        My posts
      </h3>
      <PostsForm
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
      <ul className={styles.postsList}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts