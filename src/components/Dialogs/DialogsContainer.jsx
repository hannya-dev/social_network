import './Dialogs.css';
import {onMessageChange, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/exports";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {onMessageChange, sendMessage})(AuthRedirectComponent);

export default DialogsContainer;