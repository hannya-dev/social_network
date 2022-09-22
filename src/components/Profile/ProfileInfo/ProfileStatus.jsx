import React from "react";
import "./ProfileInfo.css";

class ProfileInfo extends React.Component {
    state = {
        editMode: false,
        focus: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivatedEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileInfo;