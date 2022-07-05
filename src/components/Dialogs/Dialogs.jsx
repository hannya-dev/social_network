import React from "react";
import './Dialogs.css';

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog active">
                    Sanek
                </div>
                <div className="dialog">
                    Nikita
                </div>
                <div className="dialog">
                    Anna
                </div>
                <div className="dialog">
                    Vitek
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">Yo</div>
                <div className="message">Kachan</div>
            </div>
        </div>
    )
}

export default Dialogs;