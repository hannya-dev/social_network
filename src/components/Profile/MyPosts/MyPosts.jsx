import React from "react";
import "./MyPosts.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "First post", likesCount: 15},
    ]

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;