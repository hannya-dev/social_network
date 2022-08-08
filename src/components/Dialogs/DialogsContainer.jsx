import React from "react";
import './Dialogs.css';
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (newMessage) => {
        props.store.dispatch(onMessageChangeActionCreator(newMessage));
    };

    return (<Dialogs updateNewMessageBody={onMessageChange} sendMessage={sendMessage} dialogsPage={state.dialogsPage}/>)
}

export default DialogsContainer;