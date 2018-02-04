import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import HeaderComponent from '../components/Header';

const mapStateToProps = (state,ownProps) => {
    return {
        user: state.user,
        socket: state.socket
    }
};

const mapDispatchToProps = dispatch => ({
    logout: (user) => dispatch(logout(user))
});

const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
export default Header;
