import React from "react"
import "./Users.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: "https://img.freepik.com/premium-vector/hannya-japanese-mask_43623-252.jpg?w=300", followed: false, fullName: "Svetlana", status: "Resting", location: { city: "Chelyabinsk", country: "Russia" } },
            { id: 2, photoUrl: "https://img.freepik.com/premium-vector/hannya-japanese-mask_43623-252.jpg?w=300", followed: true, fullName: "Anna", status: "Draw", location: { city: "Saint-Petersburg", country: "Russia" } },
            { id: 3, photoUrl: "https://img.freepik.com/premium-vector/hannya-japanese-mask_43623-252.jpg?w=300", followed: false, fullName: "Nikita", status: "Programming", location: { city: "Chelyabinsk", country: "Russia" } },
            { id: 4, photoUrl: "https://img.freepik.com/premium-vector/hannya-japanese-mask_43623-252.jpg?w=300", followed: true, fullName: "Sergei", status: "Resting", location: { city: "Chelyabinsk", country: "Russia" } },
            { id: 5, photoUrl: "https://img.freepik.com/premium-vector/hannya-japanese-mask_43623-252.jpg?w=300", followed: true, fullName: "Tatiana", status: "Working", location: { city: "Chelyabinsk", country: "Russia" } },
        ])
    };

    return <div className="wrapper">
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="photo" className="userPhoto" />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} className="buttonUnfollow">Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }} className="buttonFollow">Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>status: {u.status}</div>
                </span>
                <span>
                    <div>country: {u.location.country}</div>
                    <div>city: {u.location.city}</div>
                </span>
            </span>
        </div>)}
        <div>
            <button>Update Users</button>
        </div>
    </div>
}

export default Users;