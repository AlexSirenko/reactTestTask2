import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducers/index'
import Application from './components/Application'

import {loadState, saveState} from './localStorage/localStorage'

const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);

store.subscribe(()=> {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);
