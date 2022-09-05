import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {setAuthUserData, toogleIsFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toogleIsFetching(false);
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData, toogleIsFetching})(HeaderContainer);