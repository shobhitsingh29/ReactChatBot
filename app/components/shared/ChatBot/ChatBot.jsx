import React from "react";
import _ from 'lodash';
import ChatItem from "../ChatItem";
import {Navbar, Button} from '../Navbar/Navbar'
import {updateScroll} from "../../../utility/index.js"
import {Collapse} from 'react-bootstrap';

const moment = require('moment');


class ChatBot extends React.Component {
    addUser = (user) => {
        this.props.addUser(user); //this dispatchs from wrapper
    }
    messages = () => {
        let texts = _.map(this.props.messages, (message, index) => {
            return (
                <ChatItem className={message.type}
                          avatar={message.type + '.jpg'}
                          alt={'Reactjs'}
                          subtitle={message.text}
                          date={message.timeStamp}
                          unread={0}
                          key={index}
                          template={message.template}
                          addUser={this.addUser}
                          userName={this.props.userName}
                          user={this.props.user}/>

            )
        })
        return texts;

    }
    closeChat = () => {
        const {socket, room} = this.props;
        socket.emit("unsubscribe", room);
        socket.emit("disconnect");
    }
    toggleMinMax = () => {
        this.setState({open: !this.state.open});
    }
    updateInputValue = (evt) => {
        this.setState({message: evt.target.value});
    }


    handleEmptyUserMessage = (evt) => {
        evt.preventDefault();
    }
    handleUserMessage = (evt) => {
        evt.preventDefault();
        evt.persist();

        let obj = {
            type: this.props.user,
            text: this.state.message,
            field: "name",
            room: this.props.room
        }
        this.props.handleUserMessage(obj);
        this.setState({message: ""}, () => {
            updateScroll();
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            message: ""

        };
    }

    render() {
        let messages = this.messages();
        return (
            <div className="App">
                <div className="widget-container">
                    <div className="conversation-container">
                        <Navbar right={<div>
                            <span className={this.state.open ? "glyphicon glyphicon-plus" : "glyphicon glyphicon-minus"}
                                  onClick={this.toggleMinMax}>

                            </span>
                            <span onClick={this.closeChat} className={"glyphicon glyphicon-remove"}>
                            </span>
                        </div>}
                                center={
                                    <div
                                        className="user-header">{this.props.userName || "Saxo Chat Support"} </div>
                                }
                        />
                        <Collapse in={!this.state.open}>
                            <div className="messages-container">
                                {messages}
                            </div>
                        </Collapse>
                        <Collapse in={!this.state.open}>
                            <form onSubmit={this.state.message?this.handleUserMessage:this.handleEmptyUserMessage}>
                                <input className="sender"
                                       placeholder="Type here..."
                                       multiline="true"
                                       value={this.state.message}
                                       onChange={this.updateInputValue}/>
                                <button className="send"
                                        color='white'
                                        text='Send'
                                        type="submit"
                                        value="send"
                                        onSubmit={this.state.message?this.handleUserMessage:this.handleEmptyUserMessage}>send
                                </button>

                            </form>
                        </Collapse>

                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBot;
