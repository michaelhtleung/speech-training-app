import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'boxicons';

import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import firebase from "firebase";
import {ReactMic} from 'react-mic';
import utils from "./Utils";


const useStyles = makeStyles({
    exercisePage: {
        position: 'absolute',
        width: '375px',
        height: '751px',
        left: '0px',
        top: '0px',
        'overflow-y': 'scroll',
        background: '#FFFFFF',
    },
    iconButton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        left: '24px',
        opacity: '0.5',
        padding: '24px 0',
    },
    h5: {
        position: 'absolute',
        width: '139px',
        height: '24px',
        left: '118px',
        'font-family': 'Heebo',
        'font-style': 'normal',
        'font-weight': 'normal',
        'font-size': '16px',
        'line-height': '23px',
        /* identical to box height */
        'text-align': 'center',
        color: '#000000',
        opacity: '0.5',
        margin: 0,
        padding: '12px 0',
    },
    topBar: {
        height: '48px',
    },
    exerciseWordRow: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'space-evenly',
    },
    activeWord: {
        'font-family': 'Heebo',
        'font-style': 'normal',
        'font-weight': '500',
        'font-size': '40px',
        'line-height': '59px',
        'text-align': 'center',
        color: '#000000',
    },
    inactiveWord: {
        'font-family': 'Heebo',
        'font-style': 'normal',
        'font-weight': '500',
        'font-size': '40px',
        'line-height': '59px',
        /* identical to box height */
        color: '#000000',
        opacity: '0.4',
    },
    scoreSection: {
        display: 'flex',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'flex-direction': 'column',
        'align-items': 'center',
    },
    Excellent: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        padding: '4px 8px',
        width: '73px',
        height: '29px',
        left: '16px',
        top: '16px',
        /* Purple/Light */
        background: '#F9F6FE',
        'border-radius': '4px',
        'flex-direction': 'row',
        'justify-content': 'center',
        '& div': {
            /* Purple/Main */
            color: '#7A43EE',
        }
    },
    Good: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        padding: '4px 8px',
        width: '73px',
        height: '29px',
        left: '16px',
        top: '16px',
        /* Blue/Light */
        background: '#F6F8FE',
        'border-radius': '4px',
        'flex-direction': 'row',
        'justify-content': 'center',
        '& div': {
            /* Blue/Main */
            color: '#4361EE',
        }
    },
    Average: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        padding: '4px 8px',
        width: '73px',
        height: '29px',
        left: '16px',
        top: '16px',
        /* Orange/Light */
        background: '#FEFAF6',
        'border-radius': '4px',
        'flex-direction': 'row',
        'justify-content': 'center',
        '& div': {
            /* Orange/Main */
            color: '#BA6E27',
        }
    },
    Retry: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        padding: '4px 8px',
        width: '73px',
        height: '29px',
        left: '16px',
        top: '16px',
        background: '#F5F5F5',
        'border-radius': '4px',
        'flex-direction': 'row',
        'justify-content': 'center',
        '& div': {
            color: '#363636',
        }
    },
    scoreValue: {
        'font-family': 'Heebo',
        'font-style': 'normal',
        'font-weight': '500',
        'font-size': '24px',
        'line-height': '35px',
        'color': '#000000',
    },
    recordingSection: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        position: 'absolute',
        bottom: '0',
    },
    buttonRow: {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'space-between',
    },
    soundWave: {
        width: "100%",
    }
});
  
const headingStyle = {
    textAlign: 'center',
};

function Exercise(props) {
    const classes = useStyles();

    const [sound, setSound] = useState(null);
    const [record, setRecord] = useState(false);
    const [db, setDb] = useState(firebase.apps[0].firestore());
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const [storage, setStorage] = useState(firebase.storage());
    const [recordedBlob, setRecordedBlob] = useState(null);

    const [scoreValue, setScoreValue] = useState(null);
    const [recordingState, setRecordingState] = useState(null);

    let scoreSection = null;
    let scoreWord = null;
    if (scoreValue !== null) {
        if (scoreValue >= 75) {
            scoreWord = 'Excellent';
        } else if (scoreValue >= 50) {
            scoreWord = 'Good';
        } else if (scoreValue >= 25) {
            scoreWord = 'Average';
        } else if (scoreValue >= 0) {
            scoreWord = 'Retry';
        }
        scoreSection =
        <div className={classes.scoreSection}>
            <div className={classes[scoreWord]}>
                <div>{scoreWord}</div>
            </div>
            <div className={classes.scoreValue}>{scoreValue}/100</div>
        </div>;
    }

    let recordButton = null;
    if (recordingState === null) {
        recordButton = <box-icon type='solid' name='circle' onClick={startRecording}></box-icon>
    } else if (recordingState === 'recording') {
        recordButton = <box-icon name='circle' onClick={stopRecording}></box-icon>;
    } else if (recordingState === 'waitingToRecord') {
        recordButton = <box-icon name='play-circle' onClick={startRecording}></box-icon>;
    }

    function startRecording() {
        setRecordingState('recording');
        setRecord(true);
    }

    function stopRecording() {
        setRecordingState('waitingToRecord');
        setRecord(false);
    }

    function onStop(recordedBlob) {
        console.log(recordedBlob);
        downloadRecording(recordedBlob.blob);
    }

    async function downloadRecording(blob) {
        let filename = 'cheese.webm';
        let exercise_name = 'cheese exercise';
        let exercise_word = 'cheese';
        let {score, transcription} = await utils.postVoiceRecording(
            db,
            storage,
            filename,
            blob,
            exercise_name,
            exercise_word
        );
        console.log('in downloadRecording:')
        console.log(score);
        console.log(transcription);
        setScoreValue(score);
    }

    function onData() {
        console.log("recording");
    }

    return (
        <div className={classes.exercisePage}>
            <div className={classes.topBar}>
                <IconButton className={classes.iconButton} color="primary" aria-label="return to previous page">
                    <ArrowBackIcon />
                </IconButton>
                <h5 className={classes.h5}>Module 1: Lesson 2</h5>
            </div>
            <div className={classes.exerciseWordRow}>
                <div className={classes.inactiveWord}>Book</div>
                <div className={classes.activeWord}>Cheese</div>
                <div className={classes.inactiveWord}>Tool</div>
            </div>
            <ReactMic
                record={record}
                className={classes.soundWave}
                onStop={onStop}
                onData={onData}
                channelCount={2}     // defaults -> 2 (stereo).  Specify 1 for mono.
                strokeColor="#111"
                backgroundColor="#fcfcfc"
            />
            {scoreSection}
            <div className={classes.recordingSection}>
                <div>Hold to start recording</div>
                <div className={classes.buttonRow}>
                    <div>Prev Word</div>
                    {recordButton}

                    <div>Next Word</div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;