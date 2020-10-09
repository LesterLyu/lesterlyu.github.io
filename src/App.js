import React from 'react';
import './App.css';
import ParallaxBackground from './components/ParallaxBackground';
import ThemeSwitcher from './components/ThemeSwitcher';
import {Typography, IconButton, Grid} from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {GitHub, LinkedIn, Email, Dashboard as DashboardIcon} from '@material-ui/icons';
import {HashRouter as Router, Route, Switch, Link as RouterLink} from 'react-router-dom';
import Intro from './pages/Intro';
import FastFormulaParser from './pages/demo/formulaParser/fastFormulaParser';
import ObjectDetection from './pages/demo/objectDetection'
import {Diy} from './ac/diy'
import Dashboard from "./pages/dashboard";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#2196f3'},
        secondary: {main: '#f50057'},
    },
});

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

function Home() {
    const classes = useStyles();
    return <div className="App" style={{height: '100%'}}>
        <ThemeSwitcher>
            <ParallaxBackground/>
            <Typography className={classes.name} variant="h3" gutterBottom>
                Dishu Lyu
            </Typography>
            <Typography className={classes.description} variant="subtitle1" gutterBottom>
                Specialist of Computer Science, Focus on the Web
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
                <Grid item>
                    <RouterLink to={'/dashboard'}>
                        <IconButton>
                            <DashboardIcon className={classes.icon}/>
                        </IconButton>
                    </RouterLink>
                </Grid>
            </Grid>
            <Intro/>
        </ThemeSwitcher>
    </div>;
}

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/ac">
                        <Diy/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/demo/fast-formula-parser">
                        <FastFormulaParser/>
                    </Route>
                    <Route path="/demo/object-detection">
                        <ObjectDetection/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
