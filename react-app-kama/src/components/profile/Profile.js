import avatarImage from "../../avatar.jpg"
import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPost/MyPosts"

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo image={avatarImage} userName="Adam" />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile