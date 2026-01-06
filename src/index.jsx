import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './Body';
import {Provider} from  "react-redux";
import myStore from "./Stores/mystore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
);
