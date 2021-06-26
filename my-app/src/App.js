import './App.css';
import React from "react";
import firebase from "firebase";
import utils from "./Utils";

export default function App() {
    const firebaseApp = firebase.apps[0];
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    let db = firebaseApp.firestore();

    // utils.writeTrivialData(db);
    // utils.getTrivialData(db);
    let score = utils.postVoiceRecording(
        db,
        storage,
        filename,
        blob,
        exercise_name,
        exercise_word
    );

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
