import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessage, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
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

renderEntireTree(state);

subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
