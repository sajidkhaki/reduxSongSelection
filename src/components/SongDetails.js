import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions'
import Button from '@material-ui/core/Button';
import { Divider, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        paddingTop:'25px',
        paddingLeft:'20px',
        paddingBottom:'15px',
        margin:"25px"
    },
}));

const SongDetails = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item key ={props.song ? props.song.title:""}>
                <Paper className={classes.paper}>
                    Song: {props.song ? props.song.title : "No Song Selected"}
                    <br />
                    Duration : {props.song ? props.song.duration : ""}
                </Paper>
            </Grid>
        </>
    );

}

const mapStateToProps = (state) => {

    //console.log("++++++testSongDetails++++", state)
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);