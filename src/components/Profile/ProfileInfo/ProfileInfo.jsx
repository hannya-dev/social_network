import React from "react";
import "./ProfileInfo.css";
import profileHat from "../../../assets/image/profileHat.jpg"
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/image/userImage.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img
                    src={profileHat}
                    alt="hat" className="hat"/>
            </div>
            <div className="users-info">
                <div className="description_block">
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large} alt="photosUsers"/>
                        : <img src={userImage} alt="photosUsers"/>}
                </div>
                <div className="users-info-text">
                    <ProfileStatus status="Hello world!!!"/>
                    <div className="aboutMe">
                        <span>{props.profile.aboutMe}</span>
                    </div>
                    <div className="contacts">
                        <span>contacts:</span>
                        <div>
                            <span>facebook: {props.profile.contacts.facebook}</span>
                        </div>
                        <div>
                            <span>website: {props.profile.contacts.website}</span>
                        </div>
                        <div>
                            <span>vk: {props.profile.contacts.vk}</span>
                        </div>
                        <div>
                            <span>twitter: {props.profile.contacts.twitter}</span>
                        </div>
                        <div>
                            <span>instagram: {props.profile.contacts.instagram}</span>
                        </div>
                        <div>
                            <span>youtube: {props.profile.contacts.youtube}</span>
                        </div>
                        <div>
                            <span>github: {props.profile.contacts.github}</span>
                        </div>
                        <div>
                            <span>main link: {props.profile.contacts.mainLink}</span>
                        </div>
                    </div>
                    <div>
                        <span>looking for a job: {props.profile.lookingForAJob ? "true" : "false"}</span>
                    </div>
                    <div>
                        <span>looking for a job description: {props.profile.lookingForAJobDescription}</span>
                    </div>
                    <div>
                        <span>full name: {props.profile.fullName}</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProfileInfo;