import './App.css';
import React from "react";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import image from './background_img.jpeg'
import { Button } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import {useHistory} from 'react-router-dom';



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
    height: "350px !important",
    width: '236px'
  },
  gridListImage: {
    height: '200px'
  },
  gridListImageDescription: {
    
  },
  extraGridListTile: {
    width: '100% !important',
    height: '100% !important',
    padding: '20px',
    marginBottom: '10px'
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
    const routerHistory = useHistory();
    const handleOnClick = () => routerHistory.push('/lesson');

    return (
        <div style={{width: '90%', padding: '5%'}}>
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
                  
                      <img className={classes.gridListImage} src={tile.image} alt={tile.title} style={{borderRadius: '3%'}}/>
                      <p className={'exploreModule'}>{tile.title}</p>
                      <p className={'exploreImageDescription'}>{tile.description}</p>
                      <Button variant="contained" color="primary" className={'exploreGridStart'} onClick={handleOnClick}><span className={'exploreGridStartText'}>Start →</span></Button>
                    
                    </GridListTile>
                    ))}
                </GridList>
                
            </div>
        </div>
        <div>
          <p className={'exploreExtraLessonsHeader'}>Extra Lessons</p>
            <div>
                <GridList cols={1}>
                    {tileDataExtra.map((tile) => (
                    <GridListTile className={classes.extraGridListTile}>
                        <Card variant='outlined'>
                            <CardContent>
                            <div class="row">
                                <div style={{
                                    float: 'left',
                                    width: '80%'}}>
                                    <p className={'exploreExtraLessonsTitle'}>{tile.title}</p>
                                    <p className={'exploreExtraLessonsSubTitle'}>{tile.subtitle}</p>
                                </div>
                                <div style={{
                                    float: 'left',
                                    width: '20%'}}>
                                    <Button size="medium" style={{backgroundColor: 'black', width: '40px', height: '40px'}} onClick={handleOnClick}><h5 className='button-font' style={{color: 'white'}}>→</h5></Button>
                                </div>
                            </div>
                            
                            
                            </CardContent>
                            {/* <CardActions style={{backgroundColor: "black"}}> */}
                                
                            {/* </CardActions> */}
                        </Card>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    </div>
  );
}
