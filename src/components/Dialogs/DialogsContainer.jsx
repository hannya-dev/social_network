import './Dialogs.css';
import {onMessageChange, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/exports";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    connect(mapStateToProps, {onMessageChange, sendMessage}),
    WithAuthRedirect
)(Dialogs);