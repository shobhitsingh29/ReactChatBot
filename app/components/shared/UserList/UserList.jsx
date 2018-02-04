import React, {Component} from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status : ""
        }
    }

    render() {
        let status = "";
        switch(this.props.user.status) {
            case 'online':
                status = "glyphicon-one-fine-grey-dot"
                break;
            case 'engaged':
                status = "glyphicon-one-fine-green-dot";
                break;
            case 'waiting':
               status = "glyphicon-one-fine-yellow-dot";
                break;
            case 'default':
                status = "glyphicon-one-fine-grey-dot";
                break;
        }
        return (
            <li onClick={this.props.acceptRequest.bind(this, this.props.user)} className="list-group-item">{this.props.user.name}<span  className={status}></span></li>        )
    }
}

export default UserList;


