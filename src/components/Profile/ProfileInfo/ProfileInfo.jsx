import React from "react";
import "./ProfileInfo.css";
import profileHat from "../../../assets/image/profileHat.jpg"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={profileHat}
                    alt="hat" className="hat"/>
            </div>
            <div className="description_block">
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;