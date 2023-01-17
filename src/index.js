import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
//Styling libs
import "assets/sass/index.scss"; // Standard version
import "assets/plugins/keenthemes-icons/font/ki.css";
import "assets/plugins/flaticon/flaticon.css";
import "assets/plugins/flaticon2/flaticon.css";
import "assets/plugins/fontawesome5/css/all.min.css";
import "assets/plugins/daterangepicker/daterangepicker.css";
import 'react-notifications/lib/notifications.css';
import "assets/plugins/style.color.css"; // Color de la facture | finance
import "assets/sass/perso.scss";  
 

import allReducers from "./redux/reducers";

import App from './app';
// import reportWebVitals from './reportWebVitals';

// import i18n (needs to be bundled ;)) 


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
