import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className="dialog active">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className="message">{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Sanek"},
        {id: 2, name: "Nikita"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Vitek"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "let's go"},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

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