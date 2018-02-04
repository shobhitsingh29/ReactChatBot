import React from 'react';
import {connect} from 'react-redux';
import WrapperComponent from "../components/shared/Wrapper/wrapper"
import {getSocket, addNewUser} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = dispatch => ({
    getSocket: (socket) => dispatch(getSocket(socket)),
    addNewUser: (user) => (addNewUser(user))
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
export default Wrapper;
