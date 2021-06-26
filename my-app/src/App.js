import './App.css';
import React from "react";
import firebase from "firebase";
import Home from './home';
import Explore from './explore';
import LessonVideo from './lesson_video';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


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
        <Router>
            <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/explore">Explore</Link>
                </li>
                <li>
                    <Link to="/lesson">Lesson</Link>
                </li>
                </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/explore">
                <Explore />
                </Route>
                <Route path="/lesson">
                <LessonVideo />
                </Route>
                <Route path="/">
                <Home />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}