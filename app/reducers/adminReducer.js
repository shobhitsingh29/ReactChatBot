import initialState from './initialState';
import * as types from '../api/constant';

export default function admins(state = initialState.admins, action){
    switch(action.type){
        case types.GET_ADMINS:
            const newState = action.admins;
            return newState;
        default:
            return state
    }
}
