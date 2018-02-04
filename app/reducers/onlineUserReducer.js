import initialState from './initialState';
import * as types from '../api/constant';

export default function onlineUsers(state = initialState.onlineUsers, action){
    switch(action.type){
        case types.GET_ONLINE_USERS:
            const newState = action.onlineUsers;
            return newState;
        default:
            return state
    }
}
