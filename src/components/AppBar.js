import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {ArrowBack} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    backButton: {
        color: '#fff',
        textDecoration: 'initial',
    },
    title: {
        flexGrow: 1,
        color: '#fff',
        textDecoration: 'initial',
    },
}));

export default function MyAppBar({title}) {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <RouterLink to="/" className={classes.backButton}>
                    <IconButton color={"inherit"}>
                        <ArrowBack fontSize="default"/>
                    </IconButton>
                </RouterLink>

                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
