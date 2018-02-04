import { combineReducers } from 'redux'
import user from './userReducer';
import onlineUsers from './onlineUserReducer';
import room from './roomReducer';
import admins from './adminReducer';
import socket from './socketReducer';

const rootReducer = combineReducers({
    user,
    onlineUsers,
    room,
    socket,
    admins,

});

export default rootReducer;
