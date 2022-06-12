import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import countReducer from "./stores/reducers/count";

const rootReducer = combineReducers({
  count: countReducer,
});
const store = createStore(rootReducer);

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
