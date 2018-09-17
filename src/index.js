import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/appComponent';
import allReducers from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const myStore = createStore(allReducers)

ReactDOM.render(
    <Provider store={myStore}>
        <AppComponent />
    </Provider>
    , document.getElementById('root'));

