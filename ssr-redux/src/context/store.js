/**
 * @author palmtale
 * @since 2017/6/5.
 */
 
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

const middlewares = [thunk, createLogger()];

export default (reducers) => createStore(reducers, applyMiddleware(...middlewares));