const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Все ли у тебя хорошо?:)", likeCount: 15, dislikeCount: 11 },
        { id: 2, message: "У меня все отлично, а как ты ?:)", likeCount: 11, dislikeCount: 0 },
      ],
      newPostText: "Adam Barkinkhoev"
    },
    dialogsPage: {
      dialogs: [
        { id: 0, name: "Adam" },
        { id: 1, name: "Selima" },
        { id: 2, name: "Medina" },
        { id: 3, name: "Idris" },
      ],

      messages: [
        { id: 0, message: "Ас Саляму алейкум" },
        { id: 1, message: "Уа алейкум Ас Салям" },
        { id: 2, message: "Как дела ? " },
        { id: 3, message: "Все хорошо. Альхамдули Ллях" },
      ],
    },
    sidebar: {
      friends: [
        { id: 0, name: "Adam" },
        { id: 1, name: "Selima" },
        { id: 2, name: "Medina" },
        { id: 3, name: "Idris" },
      ]
    }
  },
  _callSubscriber() {
    console.log("");
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 11,
        dislikeCount: 1
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state)
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default store
window.store = store