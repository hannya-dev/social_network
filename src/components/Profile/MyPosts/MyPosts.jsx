import React from "react";
import "./MyPosts.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className="posts">
                <Post message='Hi, how are you?' likesCount="20"/>
                <Post message='First post' likesCount="15"/>
            </div>
        </div>
    )
};

export default MyPosts;