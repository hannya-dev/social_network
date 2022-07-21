import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessage, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 sendMessage={sendMessage}
                 updateNewMessage={updateNewMessage}/>
        </React.StrictMode>
    );
}