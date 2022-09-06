import React from "react";
import Header from "./Header";
import {setAuthUserData, toogleIsFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {profileApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        profileApi.authUser().then(data => {
                if (data.resultCode === 0) {
                    this.props.toogleIsFetching(false);
                    let {id, login, email} = data.data;
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