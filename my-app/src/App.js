import './App.css';
import React from "react";
import firebase from "firebase";

export default function App() {
    const firebaseApp = firebase.apps[0];

    let db = firebaseApp.firestore();

    // // trivial write example
    // db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });

    // trivial read example
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });

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
