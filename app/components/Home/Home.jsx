import React from "react";
import PropTypes from "prop-types";
import ChatBot from '../shared/ChatBot';
import {updateScroll} from "../../utility/index"

class Home extends React.Component {

    addUser = (user) => {
        this.props.addNewUser(user);
    }
    handleMessageEvent = () => {
        const {socket} = this.props;
        socket.on('admin-msg', (message) => {
            if (this.props.history.location.pathname != "/admin") {
                let msg = JSON.parse(message);
                //this.props.createMessage({room: this.props.room, newMessage: {user: JSON.parse(inboundMessage).user, message: JSON.parse(inboundMessage).message}})
                let obj = {
                    type: msg.type,
                    text: msg.text,
                    template: false,
                    timeStamp:msg.timeStamp
                }
                let chats = this.state.messages;
                chats.push(obj);
                this.setState(({messages: chats}), () => {
                    updateScroll();
                });

            }
        });
    }
    handleUserMessage = (msg) => {
        console.log(`New message incomig! ${msg}`);
        //if (this.user.userFlag) {
        //    this.user.userName = msg.text;
        //    this.user.userFlag = false;
        //}
        const {room, socket} = this.props;
        if (msg && msg.field && msg.field == "name") {
            var obj = {
                type: "client",
                text: msg.text,
                template: false,
                room: room._id,
                timeStamp: new Date()
            }
            let chats = this.state.messages;
            chats.push(obj);
            this.setState({messages: chats});
            //    , () => { //better would be to make a add message response/client function
            //    if (this.state.messages.length == 2) {
            //        var obj = {
            //            type: "response",
            //            text: "",
            //            template: true
            //        }
            //        let chats = this.state.messages;
            //        chats.push(obj);
            //        this.setState({messages: chats});
            //    }
            //
            //});
            if (!_.isEmpty(this.props.user) && !_.isEmpty(this.props.room)) {
                socket.emit('user-msg', JSON.stringify({room: room, message: obj}));
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                "type": 'response',
                "text": "Welcome to saxo chat support",
                "template": false,
                "timeStamp": new Date()
            }, {
                "type": 'response',
                "text": "Please help us with following information",
                "template": false,
                "timeStamp": new Date()
            }, {
                "type": "response",
                "text":"",
                "template": true,
                "timeStamp": new Date()
            }],
            room: {},
            connected: false,
            flag: false,
            user: "client" //to distinguish between admin and user
        };
        this.user = {
            name: '',
            userName: '',
            userFlag: true
        };
    }

    init(user, type) {
        const {socket} = this.props;
        socket.emit('subscribe', {user: user});
        let self = this;
        socket.on('subscribeSuccess' + user._id, function (user) {
            let room = {};
            room.title = user.name;
            room.owner = user._id;
            if (!user.isAdmin)
                self.props.createChatRoom(room)
        });
    }

    componentWillReceiveProps(nextProps, prv) {
        if (!_.isEmpty(nextProps.user) && nextProps.user.isAdmin && _.isEmpty(nextProps.room)) {
            this.init(nextProps.user, "admin");
            nextProps.history.push('/admin');
        } else if (!_.isEmpty(nextProps.user) && _.isEmpty(nextProps.room))
            this.init(nextProps.user, "client");

        if (!_.isEmpty(nextProps.room) && !this.state.flag) {
            this.setState({flag: true});
            nextProps.socket.emit('joinRoom', {room: nextProps.room, user: this.props.user});
        }
    }

    componentDidMount() {
        this.handleMessageEvent();
        const {socket} = this.props;
        const self = this;
        socket.on("room-details", (data) => {
            self.setState({room: data});
        });
        socket.on('greeting-request', function (data) {
            //    self.chatRequests.unshift(room);
            //   console.log("msssg", room);
            self.setState({
                room: data.room
            });
        });
    }

    render() {
        return (
            <section className="container bg-gray">
                <ChatBot messages={this.state.messages} handleUserMessage={this.handleUserMessage}
                         userName={this.props.user.name} user={this.props.user} addUser={this.addUser}
                         room={this.state.room} from="client"/>
            </section>
        )
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired
};

export default Home;

