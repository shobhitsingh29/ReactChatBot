import initialState from './initialState';
import * as types from '../api/constant';

export default function user(state = initialState.user, action){
    switch(action.type){
        case types.ADD_USER:
            const newState = action.user;
            return newState;
        default:
            return state
    }
}
