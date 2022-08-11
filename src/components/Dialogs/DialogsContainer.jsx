import './Dialogs.css';
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (newMessage) => {
            dispatch(onMessageChangeActionCreator(newMessage));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;