import * as types from '../api/constant';
import initialState from './initialState';

export default function room(state = initialState.room, action){
    switch (action.type) {
        case types.NEW_CHAT_ROOM:
            const newState = action.room;
            return newState
        default:
            return state
    }
};

