import './App.css';
import React from "react";
import firebase from "firebase";
import { Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import { ReactMic } from 'react-mic';

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

// const navBarStyle = {
//   "bottom: 0"
// };
// export function Apps() {
//     const firebaseApp = firebase.apps[0];
//     const classes = useStyles();

//     let db = firebaseApp.firestore();

//     // // trivial write example
//     // db.collection("users").add({
//     //     first: "Ada",
//     //     last: "Lovelace",
//     //     born: 1815
//     // })
//     // .then((docRef) => {
//     //     console.log("Document written with ID: ", docRef.id);
//     // })
//     // .catch((error) => {
//     //     console.error("Error adding document: ", error);
//     // });

//     // trivial read example
//     db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${doc.data()}`);
//         });
//     });

//     return (
//       <div>
//         <h5>Module 1: Lesson 2</h5>
        

//         <BottomNavigation showLabels className={classes.root}>
//           <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//           <BottomNavigationAction label="Learn" icon={<RecordVoiceOverIcon />} />
//           <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
//         </BottomNavigation>
//       </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onStop = this.onStop.bind(this);
    this.state = {
      sound: null,
      record: false
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
      recordedBlob: recordedBlob
    });
  };

  downloadRecording = () => {
    let newBlob = new Blob(this.state.recordedBlob, { type: "audio/mpeg-3" });
  }

  onData() {
    console.log("recording");
  }
  render() {
    const firebaseApp = firebase.apps[0];
    // const classes = useStyles();

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
      <div className="App">
        <h5>Module 1: Lesson 2</h5>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
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
        <BottomNavigation showLabels>
           <BottomNavigationAction label="Home" icon={<HomeIcon />} />
           <BottomNavigationAction label="Learn" icon={<RecordVoiceOverIcon />} />
           <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
         </BottomNavigation>
                 
      </div>
    );
  }
}

export default App;

