import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 20},
    {id: 2, message: "First post", likesCount: 15},
];
let dialogs = [
    {id: 1, name: "Sanek"},
    {id: 2, name: "Nikita"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Vitek"},
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "let's go"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
