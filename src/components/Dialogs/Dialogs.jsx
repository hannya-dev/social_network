import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className="dialogs">
            <div className="dialogs_items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;