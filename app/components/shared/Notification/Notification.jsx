import React from "react";
import "./Notification.css";

export class Notification extends  React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.onHideModal();
        },5000);
    }
    render() {
        return (
            <div className="alert alert-info-alt alert-dismissable">
                <span className="glyphicon glyphicon-certificate"></span>
                <button type="button" className="close" onClick={this.props.onHideModal}>
                    ×</button>New support request from<strong> {this.props.room.title} </strong>
            </div>
        );
    }
}
export default Notification;

