import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    minWidth: 275,
  },
  gridList: {
    flexWrap: 'nowrap'
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
      title: 'title'
    },
    {
      title: 'title'
    },
    {
      title: 'title'
    }
];

const tileDataExtra = [
    {
      title: 'titlee',
      subtitle: 'module1'
    },
    {
      title: 'titlee',
      subtitle: 'module2'
    },
    {
      title: 'titlee',
      subtitle: 'module3'
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
        <div>
        <h1>Learn</h1>
        {/* tab panel */}
        <div>
            <h3>Main Lessons</h3>
            <div>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                    <GridListTile> {/* key={tile.img}>
                        <img src={tile.img} alt={tile.title} />*/}
                        <GridListTileBar
                            title={tile.title}
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
        <div>
            <h3>Extra</h3>
            <div>
                <GridList cols={1}>
                    {tileDataExtra.map((tile) => (
                    <GridListTile>
                        <Card className={classes.root}>
                            <CardContent>
                                <h4>{tile.subtitle}</h4>
                                <h2>{tile.title}</h2>
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
