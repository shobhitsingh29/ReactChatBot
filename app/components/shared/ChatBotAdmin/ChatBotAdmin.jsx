import React from "react";
import _ from "lodash";
import ChatItem from "../ChatItem";
import {Navbar} from '../Navbar/Navbar';
import {updateScroll} from "../../../utility/index.js"
import {Collapse} from 'react-bootstrap';

class ChatBotAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messages: this.props.room && this.props.room.messages
        };
        this.user = {
            name: ""
        };
    }

    addUser = user => {
        let details = Object.assign({}, user, this.user);
        this.props.addUser(details); //this dispatchs from wrapper
    }

    closeChat = (evt) => {
        const {socket, room} = this.props;
        //let listElement = document.getElementsByClassName("list-group-item");
        //let returnText= _.map(listElement, (ele) => {
        //
        //    if (ele.innerText == room.title) {
        //        ele.children[0].style.background = "red";
        //
        //    }
        //
        //});
        //evt.target.closest(".App").parentElement.removeChild(evt.target.closest(".App"));
      //  evt.target.children[0].style.background = "green";
        socket.emit("unsubscribe", room);
        //socket.emit("disconnect");
    }

    toggleMinMax = () => {
        this.setState({open: !this.state.open});
    }

    messages = () => {
        let texts = _.map(this.state.messages, (message, index) => {
            return (
                <ChatItem
                    className={message.type}
                    avatar={message.type + '.jpg'}
                    alt={"Reactjs"}
                    subtitle={message.text}
                    date={message.timeStamp}
                    unread={0}
                    key={index}
                    template={message.template}
                    addUser={this.addUser}
                />
            );
        });
        return texts;
    }

    updateInputValue = evt => {
        this.setState({message: evt.target.value});
    }
    handleEmptyUserMessage(evt){

        evt.preventDefault();
    }
    handleUserMessage = evt => {
        evt.preventDefault();
        evt.persist();
        let message = this.state.message;
        const {socket, room} = this.props;
        let obj = {
            type: "response",
            text: message,
            room: room._id,
            timeStamp: new Date()
        };
        socket.emit("admin-msg", JSON.stringify({room: room, message: obj}));
        let msgs = this.state.messages;
        try {
            msgs.push(obj);

        } catch (e) {
            console.error(e);
        }
        this.setState({message: "", messages: msgs}, () => {
            updateScroll();
        });

    }

    handleNewUserMessage = () => {
        // Now send the message throught the backend API
        // addResponseMessage(`Hi ${newMessage},what would you like to enter?`);
        const {socket, room} = this.props;
        const self = this;
        socket.on('user-msg' + room.title, (message) => {
            console.log("state messagese", self.state.messages);
            console.log('received message from user', message);
            let msg = JSON.parse(message);
            let obj = {
                type: "client",
                text: msg.text,
                room: room._id,
                timeStamp: msg.timeStamp
            };
            let msgs = self.state.messages;
            msgs.push(obj);
            self.setState(({message: "", messages: msgs}), () => {
                updateScroll();
            });
        });
    }

    componentDidMount() {
        this.handleNewUserMessage();
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
                            <span className={"glyphicon glyphicon-remove"} onClick={this.closeChat}>
                            </span>
                        </div>}
                                center={
                                    <div className="user-header">{this.props.room.title || "welcome"} </div>
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

export default ChatBotAdmin;
