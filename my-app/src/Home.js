// import './App.css';
import progress from './imgs/progress.jpg';
import avatar from './imgs/avatar.jpg';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import {useHistory} from 'react-router-dom';



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
        title: 'Freestyle',
        rating: 'Good',
        score: 0.78
      },
      {
        date: '23/06',
        title: 'Module 1: Lesson 3',
        rating: 'Excellent',
        score: 0.94
      },
      {
        date: '23/06',
        title: 'Module 1: Lesson 2',
        rating: 'Excellent',
        score: 0.91
      },
      {
        date: '23/06',
        title: 'Freestyle',
        rating: 'Good',
        score: 0.78
      },
      {
        date: '23/06',
        title: 'Module 1: Lesson 1',
        rating: 'Average',
        score: 0.55
      }
];



const title = "Long Vowels"
const subtitle = "Module 2: Lesson 2"


export default function Home() {
    const classes = useStyles();
    const routerHistory = useHistory();
    const handleOnClick = () => routerHistory.push('/lesson');
    return (
        <React.Fragment>
            <div style={{width: '90%', padding: '5%'}}>
                <h1 style={{fontFamily: 'Heebo'}}>Hello, Paris<img src={avatar} style={{width: '44px', float: 'right'}}></img></h1>
                <div>
                    <h3>Next Lesson</h3>
                    <div>
                        <Card className={classes.root} style={{backgroundColor: "#161B25"}}>
                            <CardContent style={{width: '100%', padding: '24px'}}>
                                <h4 style={{color: "white", opacity: '0.7'}}>{subtitle}</h4>
                                <h2 style={{color: "white", margin: '0', padding: '1px'}}>{title}</h2>
                            </CardContent>
                            <CardActions style={{backgroundColor: "#D0D6F7", width: '100%'}}>
                                <Button size="small" style={{width: '100%'}} onClick={handleOnClick}><h5 className='button-font'>Start Lesson →</h5></Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <div>
                    <h3>Progress{/* <span style={{float: 'right'}}>dropdown</span> */}</h3>
                    <div>
                        <img src={progress} alt="progress graph" style={{width: '100%'}}></img>
                    </div>
                </div>
                <div>
                    <h3>History{/* <span style={{float: 'right'}}>dropdown</span> */}</h3>
                    <div>
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableBody>
                                {history.map((row) => (
                                    <TableRow style={{height: '45px'}}>
                                    <TableCell align="center" style={{borderBottom: 'none', width: '10%', padding: '0'}}><h4 style={{opacity: '0.7'}}>{row.date}</h4></TableCell>
                                    <TableCell align="center" style={{borderBottom: 'none', width: '50%', padding: '0 0 0 16px'}}><h4 style={{textAlign: 'left'}}>{row.title}</h4></TableCell>
                                    <TableCell align="center" style={{borderBottom: 'none', width: '40%', padding: '0 0 0 16px'}}>   
                                        <h4 style={{textAlign: 'right'}}>{row.rating} {Math.round(row.score*100)}%</h4>
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}