import * as axios from "axios";
import React from "react"
import "./Users.css";
import userPhoto from "../../assets/image/userImage.png";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    };

    return <div className="wrapper">
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo" className="userPhoto" />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} className="buttonUnfollow">Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }} className="buttonFollow">Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>status: {u.status}</div>
                </span>
                <span>
                    {/* <div>country: {u.location.country}</div>
                    <div>city: {u.location.city}</div> */}
                </span>
            </span>
        </div>)}
        <div>
            <button onClick={getUsers}>Get users</button>
        </div>
    </div>
}

export default Users;