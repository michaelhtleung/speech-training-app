import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import YoutubeEmbed from './components/Youtube_embed';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    // videoResponsive: {
    //     overflow: hidden,
    //     // paddingBottom: 56.25%,
    //     position: relative,
    //     height: 0,
    // },
    // videoResponsive iframe: {
    //     left: 0,
    //     top: 0,
    //     // height: 100%,
    //     // width: 100%,
    //     position: absolute,
    // },
}));

const description = "A long vowel is a vowel that is pronounced the same as its name. For example, the word emu starts with the long E sound. A long vowel sounds can be spelled in four different ways and each way follows a specific spelling pattern. A vowel at the end of a syllable can be long. In the word we, as in We love emus, the vowel E is at the end of the syllable and says long E. In these words, the vowel at the end of a syllable is long: hero, hi, music. A silent E can also make the previous vowel long. In the word cute, as in Emus are cute, the long U sound is formed by adding Silent E at the end of the word."
const des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default function LessonVideo() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


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
            <YoutubeEmbed embedId="_v2xYMHjxEQ" />
            <div className={'exploreParentDiv'}>
            <p className={'lessonTitle'}>Module 1: Lesson 2</p>
            <h1 className={'lessonSubTitle'}>Long Vowels</h1>
            <div>
                <p className={'lessonDescription'}>{description}</p>
                <Button color="primary" className={'lessonStart'} variant="contained"><span className={'lessonStartText'}>Start Exercise</span></Button>
            </div>
            </div>
        </div>
  );
}
