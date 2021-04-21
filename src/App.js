import React from 'react'
import SongList from './components/SongList'
import SongDetails from './components/SongDetails'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={3} direction="row"
        justify="center"
        alignItems="center"
      >

        <Grid item sm={6}>
          <SongList />
        </Grid>

        <Grid item sm={5}>
          <SongDetails />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
