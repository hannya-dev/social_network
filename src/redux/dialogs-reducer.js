const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {

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