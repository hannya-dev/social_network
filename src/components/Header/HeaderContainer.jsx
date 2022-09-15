import React from "react";
import Header from "./Header";
import {getAuthUserData, toogleIsFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
};

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {toogleIsFetching, getAuthUserData})(HeaderContainer);