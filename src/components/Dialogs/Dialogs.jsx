import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.onMessageChange(newMessage);
    };

    return (
        <div className="dialogs">
            <div className="dialogs_items">
                {dialogsElements}
            </div>
            <div className="messages">
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement} value={props.dialogsPage.newMessage}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;