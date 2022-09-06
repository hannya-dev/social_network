import React from "react";
import "./Users.css";
import userPhoto from "../../assets/image/userImage.png";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onClickFollow = (id) => {
        usersApi.followUsers(id).then(data => {
            if (data.resultCode === 0) {
                props.follow(id);
            }
        });
    }
    let onClickUnfollow = (id) => {
        usersApi.unfollowUsers(id).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(id);
            }
        });
    };

    return <div className="wrapper">
        {props.users.map(u => <div key={u.id} className="users-wrapper">
            <span className="usersPhoto">
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userPhoto"
                             className="userPhoto"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => onClickUnfollow(u.id)} className="buttonUnfollow">Unfollow</button>
                        : <button onClick={() => onClickFollow(u.id)} className="buttonFollow">Follow</button>}
                </div>
            </span>
            <span className="usersInfo">
                <span>
                    <div>{u.name}</div>
                    <div>status: {u.status}</div>
                </span>
            </span>
        </div>)}
        <div className="pagesNumber">
            {pages.map(p => {
                return <span className={props.currentPage === p && "selectedPage"} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
    </div>
}

export default Users;