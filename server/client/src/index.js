import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from "./stores/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(
    // async functions in action creators
    applyMiddleware(thunk)
));


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

root.render(
    app
  );

registerServiceWorker();
