import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import {isProd} from './config';
import rootSaga from './sagas';
import App from './App.js';
import 'react-chat-elements/dist/main.css';
import './assets/less/style.less';

const logger = createLogger({
    predicate: (getState, action) => !isProd()
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));


