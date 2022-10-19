import React from "react";
import "./ProfileInfo.css";

class ProfileInfo extends React.Component {
    
    state = {
        editMode: false,
        focus: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value 
        });
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
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivatedEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileInfo;