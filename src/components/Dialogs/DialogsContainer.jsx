import React from "react";
import './Dialogs.css';
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onMessageChange = (newMessage) => {
                    store.dispatch(onMessageChangeActionCreator(newMessage));
                };

                return <Dialogs updateNewMessageBody={onMessageChange}
                    sendMessage={sendMessage}
                    dialogsPage={state.dialogsPage} />
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;