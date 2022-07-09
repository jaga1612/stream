import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux"
import reducers from "./Reducers"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

createRoot(document.querySelector('#root')).render(
<Provider store={createStore(reducers,composeEnhancers(applyMiddleware(thunk)))}>
<App/>
</Provider>
)