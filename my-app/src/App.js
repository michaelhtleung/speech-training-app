import './App.css';
import React from "react";
import firebase from "firebase";
import { Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import { ReactMic } from 'react-mic';
import utils from "./Utils";
import Home from './home';
import Explore from './explore';
import LessonVideo from './lesson_video';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


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

class App extends React.Component {
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
}
