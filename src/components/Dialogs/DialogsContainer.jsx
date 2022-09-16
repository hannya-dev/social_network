import './Dialogs.css';
import { onMessageChange, sendMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

const DialogsContainer = connect(mapStateToProps, {onMessageChange, sendMessage})(Dialogs);

export default DialogsContainer;