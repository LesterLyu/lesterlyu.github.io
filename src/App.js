import React from 'react';
import './App.css';
import ParallaxBackground from './components/ParallaxBackground';
import ThemeSwitcher from './components/ThemeSwitcher';
import {Typography, IconButton, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {GitHub, LinkedIn, Email} from '@material-ui/icons';
import Intro from './pages/Intro';

const useStyles = makeStyles({
    name: {
        paddingTop: 60,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu'
    },
    icon: {
        fontSize: 30,
        color: '#555'
    },
    description: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu'
    }
});

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <ThemeSwitcher>
                <ParallaxBackground/>
                <Typography className={classes.name} variant="h3" gutterBottom>
                    Dishu Lyu
                </Typography>
                <Typography className={classes.description} variant="subtitle1" gutterBottom>
                    Graduating 2020 May 😋
                </Typography>
                <Grid container justify="center">
                    <Grid item>
                        <IconButton href="https://github.com/LesterLyu" target="_blank">
                            <GitHub className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="https://www.linkedin.com/in/lesterlyu/" target="_blank">
                            <LinkedIn className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="mailto:lvds2000@gmail.com" target="_blank">
                            <Email className={classes.icon}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Intro/>

            </ThemeSwitcher>
        </div>
    );
}

export default App;
