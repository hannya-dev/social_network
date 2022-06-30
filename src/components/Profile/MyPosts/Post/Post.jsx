import React from "react";
import './Post.css'

const Post = (props) => {
    return (
        <div className="post-item">
            <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg" alt="No image"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;