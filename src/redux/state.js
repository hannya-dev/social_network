let rerenderEntireTree = () => {console.log("State is change")}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "First post", likesCount: 15},
        ],
        newPostText: "hello",
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Sanek"},
            {id: 2, name: "Nikita"},
            {id: 3, name: "Anna"},
            {id: 4, name: "Vitek"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "let's go"},
        ],
        newMessage: "hello, friend!!!",
    },
}

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
};

export const sendMessage = () => {

    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessage,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = "";
    rerenderEntireTree();
};

export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;
    rerenderEntireTree()
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;