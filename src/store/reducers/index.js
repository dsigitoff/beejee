import {combineReducers} from "redux";
import cards from './cards';
import login from './login';

const rootReducer = combineReducers({
    cards,
    login
});

export default rootReducer