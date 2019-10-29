import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/App"
import { Provider } from "react-redux"
import configureStore from "./store";

const store = configureStore()

console.log(store.getState())

ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
);
