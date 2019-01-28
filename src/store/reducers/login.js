import {LOGIN} from '../constants/actionTypes';

const initialState = {
    username: "",
    password: ""
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                username: action.payload.login,
                password: action.payload.password
            }
        }
        default: return state
    }
}