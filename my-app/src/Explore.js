import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import image from './background_img.jpeg'
import { Button } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    
  },
  gridListTile: {
    borderRadius: '10px',
    height: "300px !important",
  },
  gridListImage: {
    height: '200px'
  },
  gridListImageDescription: {
    
  },
  extraGridListTile: {
    width: '90% !important',
    height: '100% !important',
    marginBottom: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const tileData = [
    {
      image: image, 
      title: 'Module 1: Lesson 1',
      description: "Long Vowels"
    },
    {
      image: image,
      title: 'Module 1: Lesson 2',
      description: 'Constants'
    },
    {
      image: image,
      title: 'Modeule 1: Lesson 3',
      description: 'Numbers'
    }
];

const tileDataExtra = [
    {
      title: 'Bonus Module 1',
      subtitle: 'Practice 1'
    },
    {
      title: 'Bonus Module 1',
      subtitle: 'Practice 2'
    },
    {
      title: 'Bonus Module 2',
      subtitle: 'Practice 1'
    },
    {
      title: 'Bonus Module 2',
      subtitle: 'Practice 1'
    }
];

export default function Explore() {
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
        <div className={'exploreParentDiv'}>
        <p className={'exploreHeader'}>Learn</p>
        <span className={'exploreUpcoming'}>Upcoming</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={'exploreCompleted'}>Completed</span>
        <p className={'exploreMainLessons'}>Main Lessons</p>
        <div>
            <div>
                <GridList className={classes.gridList} spacing={20} cols={1.5}>
                    {tileData.map((tile) => (
                    <GridListTile className={classes.gridListTile} key={tile.image}>
                  
                      <img className={classes.gridListImage} src={tile.image} alt={tile.title} />
                      <p className={'exploreModule'}>{tile.title}</p>
                      <p className={'exploreImageDescription'}>{tile.description}</p>
                 
                    
                    </GridListTile>
                    ))}
                </GridList>
                
            </div>
        </div>
        <Button variant="contained" color="primary" className={'exploreGridStart'}><span className={'exploreGridStartText'}>Start</span></Button>
        <div>
          <p className={'exploreExtraLessonsHeader'}>Extra Lessons</p>
            <div>
                <GridList cols={1}>
                    {tileDataExtra.map((tile) => (
                    <GridListTile className={classes.extraGridListTile}>
                        <Card>
                            <CardContent>
                            <p className={'exploreExtraLessonsTitle'}>{tile.title}</p>
                            {/* <Button className={'exploreExtraLessonsButton'} variant="contained" color="primary">
                              Primary
                            </Button> */}
                            
                            <p className={'exploreExtraLessonsSubTitle'}>{tile.subtitle}</p>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    </div>
  );
}
