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
    return (
        <div className="dialogs">
            <div className="dialogs_items">
                <DialogItem name="Sanek" id="1"/>
                <DialogItem name="Nikita" id="2"/>
                <DialogItem name="Anna" id="3"/>
                <DialogItem name="Vitek" id="4"/>
            </div>
            <div className="messages">
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="let's go"/>
            </div>
        </div>
    )
}

export default Dialogs;