import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header />
                <Navbar />
                <div className="app_wrapper_content">
                    <Routes>
                        <Route path="/news" element={<News />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;