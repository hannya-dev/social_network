import React from "react";
import "./Users.css";
import userPhoto from "../../assets/image/userImage.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className="wrapper">
            {props.users.map(u => <div key={u.id} className="users-wrapper">
                <span className="usersPhoto">
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userPhoto" className="userPhoto" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} className="buttonUnfollow">Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} className="buttonFollow">Follow</button>}
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
                    return <span className={props.currentPage === p && "selectedPage"} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
}

export default Users;