import React from 'react';
import { connect } from 'react-redux';
import { addNewUser, createChatRoom, getSocket } from '../actions';
import HomeComponent from '../components/Home';

const mapStateToProps = (state,ownProps) => {
    return {
       user: state.user,
       room: state.room,
       socket: state.socket
    }
};

const mapDispatchToProps = dispatch => ({
    addNewUser: (user) => dispatch(addNewUser(user)),
    createChatRoom: (room) => dispatch(createChatRoom(room)),
    getSocket: (socket) => dispatch(getSocket(socket))
});

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
