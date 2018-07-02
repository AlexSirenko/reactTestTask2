import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducers/index'
import ApplicationContainer from './containers/ApplicationContainer'

import {loadState, saveState} from './localStore/localStorage'

const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    composeWithDevTools()
);

store.subscribe(()=> {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <ApplicationContainer />
    </Provider>,
    document.getElementById('app')
);
