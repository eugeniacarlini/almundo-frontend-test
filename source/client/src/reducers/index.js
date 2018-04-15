import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { hotelReducer } from './hotelReducer';

export default combineReducers({
    hotelState:hotelReducer,
    routing
})