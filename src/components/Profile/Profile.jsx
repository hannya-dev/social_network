import React from "react";
import "./Profile.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="hat" className="hat"/>
            </div>
            <div className="avatar">
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;