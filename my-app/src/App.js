import './App.css';
import React from "react";
import firebase from "firebase";
import utils from "./Utils";

export default function App() {
    const firebaseApp = firebase.apps[0];

    let db = firebaseApp.firestore();

    // utils.writeTrivialData(db);
    // utils.getTrivialData(db);

    return (
      <div>
        <h1>React & Firebase</h1>
        <h2>By @farazamiruddin</h2>
        <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code>
      </div>
  );
}
