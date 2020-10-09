import {createStore , applyMiddleware, combineReducers} from 'redux';

import logger from 'redux-logger';
import userReducer from './reducer/userReducer';
import  clientReducer  from './reducer/clientRedcuer';
const thunkMiddleware = require('redux-thunk').default;

//const store = createStore(userReducer , applyMiddleware(logger));
const mainReducer=combineReducers(
    {
        client :clientReducer,
        user :userReducer
    }
);
const store=createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;
//export default productStore;  





