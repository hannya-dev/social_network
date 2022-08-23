import * as axios from "axios";
import React from "react"
import "./Users.css";
import userPhoto from "../../assets/image/userImage.png";

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className="wrapper">
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo" className="userPhoto" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }} className="buttonUnfollow">Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }} className="buttonFollow">Follow</button>}
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
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && "selectedPage"} onClick={() => { this.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
    }
};

export default Users;