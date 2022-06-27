import React from "react";
import "./Profile.css"

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
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className="posts">
                    <div className="item">
                        post 1
                    </div>
                    <div className="item">
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;