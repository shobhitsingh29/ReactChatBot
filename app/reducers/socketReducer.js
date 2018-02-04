import initialState from './initialState';
import * as types from '../api/constant';

export default function socket(state = initialState.socket, action){
    switch(action.type){
        case types.GET_SOCKET:
            const newState = action.socket
            return newState
        default:
            return state
    }
}
