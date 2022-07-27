let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 20 },
                { id: 2, message: "First post", likesCount: 15 },
            ],
            newPostText: "hello",
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
            newMessage: "hello, friend!!!",
        },
    },
    _callSubscriber() { console.log("State is change") },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === "SEND-MESSAGE") {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessage,
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state)
        };
    },
};

export default store;
window.store = store;