import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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

const history = [
    {
        date: '23/06',
        title: 'titlee',
        rating: 'rating'
      },
      {
        date: '23/06',
        title: 'titlee',
        rating: 'rating'
      },
      {
        date: '23/06',
        title: 'titlee',
        rating: 'rating'
      }
];

const title = "Long Vowels"
const subtitle = "Module 2: Lesson 2"


export default function Home() {
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
        <h1>Hello, Paris</h1>
        <div>
            <h3>Next Lesson</h3>
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <h4>{subtitle}</h4>
                        <h2>{title}</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><h5>Start Lesson →</h5></Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        <div>
            <h3>Progress<span style={{float: 'right'}}>dropdown</span></h3>
            <div>
                <img src="..\public\progress.jpg" alt="progress graph"></img>
            </div>
        </div>
        <div>
            <h3>History<span style={{float: 'right'}}>dropdown</span></h3>
            <div>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    {/* <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead> */}
                    <TableBody>
                    {history.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.rating}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  );
}
