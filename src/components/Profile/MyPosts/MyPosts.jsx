import React from "react";
import "./MyPosts.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className="posts_block">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="posts">
                <Post message='Hi, how are you?' likesCount="20"/>
                <Post message='First post' likesCount="15"/>
            </div>
        </div>
    )
};

export default MyPosts;