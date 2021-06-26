import './App.css';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import firebase from "firebase";
import {ReactMic} from 'react-mic';
import utils from "./Utils";


const useStyles = makeStyles({
    root : {
      width: '100%',
      backgroundColor: "#FFFFFF",
      borderTop: '1px solid gray',
      position: 'fixed',
      bottom: 0,
    }
})
  
const headingStyle = {
textAlign: 'center',
};

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.onStop = this.onStop.bind(this);
        this.state = {
        sound: null,
        record: false,
        db: firebase.apps[0].firestore(),
        // Get a reference to the storage service, which is used to create references in your storage bucket
        storage: firebase.storage(),
        };
    }
    startRecording = () => {
        this.setState({
        record: true
        });
    };

    stopRecording = () => {
        this.setState({
        record: false
        });
    };

    onStop = recordedBlob => {
        const self = this;
        console.log(recordedBlob);
        self.setState({
        blobURL: recordedBlob.blobURL,
        recordedBlob: recordedBlob.blob,
        });
    };

    downloadRecording = async () => {
        let filename = 'foo.webm';
        let exercise_name = 'foo exercise';
        let exercise_word = 'apple';
        let {score, transcription} = await utils.postVoiceRecording(
            this.state.db,
            this.state.storage,
            filename,
            this.state.recordedBlob,
            exercise_name,
            exercise_word
        );
        console.log('in downloadRecording:')
        console.log(score);
        console.log(transcription);
    }

    onData() {
        console.log("recording");
    }
    render() {
        return (
        <div className="App">
            <h5>Module 1: Lesson 2</h5>
            <ReactMic
                record={this.state.record}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                channelCount={2}     // defaults -> 2 (stereo).  Specify 1 for mono.
                strokeColor="#111"
                backgroundColor="#fcfcfc"
            />
            <button
                style={{ marginTop: 25, marginBottom: 25 }}
                color="blue"
                onClick={this.startRecording}
            >
            Record a sound
            </button>
            <button onClick={this.stopRecording}>Stop</button>
            <button onClick={this.downloadRecording}>Download</button>
            <p>{this.state.blobURL}</p> 
        </div>
        );
    }
}

export default Exercise;