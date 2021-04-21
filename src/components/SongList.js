import React from 'react';
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
        paddingTop: '15px',
        paddingLeft: '20px',
        paddingBottom: '15px',
        margin: "25px"
    }
}));

const SongList = (props) => {
    const classes = useStyles();
    const renderList = () => {
        console.log('songListComponent', props)
        return props.songs.map((song) => {
            return (
                <>
                        <Paper className={classes.paper}>
                        <Grid item  key={song.title} onClick={() => props.selectedSong(song)}>
                            {song.title}
                            <Button style={{marginLeft:'220px'}} variant="contained" color="secondary" onClick={() => props.selectedSong(song)}>
                            Select
                        </Button>
                            </Grid>
                        </Paper>
                    {/* <Divider /> */}
                </>
            )
        })
    }
    return (
        <>
            {renderList()}
        </>
    )
}

const mapStateToProps = (state) => {

    console.log("songlistFileInListComponentRendered", state)
    return { songs: state.song }
}

export default connect(mapStateToProps, {
    selectedSong  // passing function to listsongs here..
    //deletedSong   
})(SongList);
