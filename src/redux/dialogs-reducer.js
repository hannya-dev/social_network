const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
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
newMessage: "",}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage,
            };

            state.messages.push(newMessage);
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    };
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const onMessageChangeActionCreator = (newMessage) => ({ type: UPDATE_NEW_MESSAGE, newMessage });

export default dialogsReducer;