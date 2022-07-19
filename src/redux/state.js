import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "First post", likesCount: 15},
        ],
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
    },
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.unshift(newPost);
    renderEntireTree(state)
};

export default state;