import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 20 },
                { id: 2, message: "First post", likesCount: 15 },
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Sanek" },
                { id: 2, name: "Nikita" },
                { id: 3, name: "Anna" },
                { id: 4, name: "Vitek" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "let's go" },
            ],
            newMessage: "",
        },
        sidebar: {},
    },
    _callSubscriber() { console.log("State is change") },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;