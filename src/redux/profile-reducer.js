const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 20 },
        { id: 2, message: "First post", likesCount: 15 },
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [{ id: 5, message: newPost, likesCount: 0 },
                ...state.posts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer;