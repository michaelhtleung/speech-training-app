import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'boxicons'

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    backgroundColor: "#FFFFFF",
    borderTop: '1px solid gray',
  }
}));

export default function Footer() {
    const classes = useStyles();


    // const firebaseApp = firebase.apps[0];

    // let db = firebaseApp.firestore();

    // // // trivial write example
    // // db.collection("users").add({
    // //     first: "Ada",
    // //     last: "Lovelace",
    // //     born: 1815
    // // })
    // // .then((docRef) => {
    // //     console.log("Document written with ID: ", docRef.id);
    // // })
    // // .catch((error) => {
    // //     console.error("Error adding document: ", error);
    // // });

    // // trivial read example
    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });

    return (
        <div>
        <div className={'footerDiv'}>

        </div>
        <BottomNavigation
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                icon={<box-icon name='home'></box-icon>}
            />
            <BottomNavigationAction
                component={Link}
                to="/explore"
                label="Explore"
                icon={<box-icon name='compass'></box-icon>}
            />
            <BottomNavigationAction
                component={Link}
                to="/lesson"
                label="Lesson"
                icon={<box-icon name='microphone' ></box-icon>}
            />
            <BottomNavigationAction
                component={Link}
                to="/exercise"
                label="Exercise"
                icon={<box-icon name='dumbbell'></box-icon>}
            />
        </BottomNavigation>
        </div>
    );
}
