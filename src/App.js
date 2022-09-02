import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route} from "react-router-dom";
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
                        <Route path="/news" render={() => <News />} />
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/music" render={() => <Music />} />
                        <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;