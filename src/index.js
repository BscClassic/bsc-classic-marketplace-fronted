import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
 apiKey: "AIzaSyCDoKciTAT2Aab1FqXiOw_LSL2PuxfY9Ww",
 authDomain: "bsc-classic-marketplace.firebaseapp.com",
 projectId: "bsc-classic-marketplace",
 storageBucket: "bsc-classic-marketplace.appspot.com",
 messagingSenderId: "418200630165",
 appId: "1:418200630165:web:5656f39c7548301c3bfc9c",
 measurementId: "G-280VLECXSS"
});

import './index.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
