import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import firebase from "firebase";
import {ReactMic} from 'react-mic';
import utils from "./Utils";


const useStyles = makeStyles({
    // root : {
    //   width: '100%',
    //   backgroundColor: "#FFFFFF",
    //   borderTop: '1px solid gray',
    //   position: 'fixed',
    //   bottom: 0,
    // },
    exercisePage: {
        position: 'absolute',
        width: '375px',
        height: '751px',
        left: '0px',
        top: '0px',
        'overflow-y': 'scroll',
        background: '#FFFFFF',
    }
})
  
const headingStyle = {
    textAlign: 'center',
};

function Exercise(props) {
    const [sound, setSound] = useState(null);
    const [record, setRecord] = useState(false);
    const [db, setDb] = useState(firebase.apps[0].firestore());
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const [storage, setStorage] = useState(firebase.storage());
    const [recordedBlob, setRecordedBlob] = useState(null);

    function startRecording() {
        setRecord(true);
    }

    function stopRecording() {
        setRecord(false);
    }

    function onStop(recordedBlob) {
        console.log(recordedBlob);
        setRecordedBlob(recordedBlob.blob);
    }

    async function downloadRecording() {
        let filename = 'foo.webm';
        let exercise_name = 'foo exercise';
        let exercise_word = 'apple';
        let {score, transcription} = await utils.postVoiceRecording(
            db,
            storage,
            filename,
            recordedBlob,
            exercise_name,
            exercise_word
        );
        console.log('in downloadRecording:')
        console.log(score);
        console.log(transcription);
    }

    function onData() {
        console.log("recording");
    }

    return (
        <div className="App">
            <div>
                <IconButton color="primary" aria-label="return to previous page">
                    <ArrowBackIcon />
                </IconButton>
                <h5>Module 1: Lesson 2</h5>
            </div>
            <ReactMic
                record={record}
                className="sound-wave"
                onStop={onStop}
                onData={onData}
                channelCount={2}     // defaults -> 2 (stereo).  Specify 1 for mono.
                strokeColor="#111"
                backgroundColor="#fcfcfc"
            />
            <button
                style={{ marginTop: 25, marginBottom: 25 }}
                color="blue"
                onClick={startRecording}
            >
            Record a sound
            </button>
            <button onClick={stopRecording}>Stop</button>
            <button onClick={downloadRecording}>Download</button>
        </div>
    );
}

export default Exercise;