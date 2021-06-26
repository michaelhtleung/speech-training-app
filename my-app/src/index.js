import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Explore from './explore';
import LessonVideo from './lesson_video'
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
// load in firebase secrets
import object from './firebase_secrets.json';

// Use your config values here.
firebase.initializeApp(object);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
