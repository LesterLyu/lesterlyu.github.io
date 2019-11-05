import {Typography, Link, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles({
    itemRoot: {
        textAlign: 'left',
        paddingBottom: 20,
        fontFamily: 'Ubuntu',
        lineHeight: 1.5,
    },
    title: {
        paddingTop: 30,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu',
        textAlign: 'initial',
        fontSize: 26,
    },
    item: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#000',
        "&:hover": {
            color: '#2196f3'
        },
    },
    itemDescription: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#7a7a7a',
    },
    hr: {
        borderTop: '1px solid #ddd',
    }
});

function Item(props) {
    const {name, description, link} = props;
    const classes = useStyles();
    return (
        <div className={classes.itemRoot}>
            <Link className={classes.item} href={link} target="_blank">
                {name}
            </Link>
            {' · '}
            <span className={classes.itemDescription}>
                {description}
            </span>
        </div>
    );
}

function Intro() {
    const classes = useStyles();
    return (
        <Container style={{maxWidth: 800}}>
            <hr className={classes.hr}/>
            <Typography className={classes.title} variant="h5" gutterBottom>
                Public Projects
            </Typography>
            <Item name="MOHLTC Data Project"
                  description="A web app designed for businesses to create data collection forms on the fly and collect
                   data in a short period of time."
                  link="https://github.com/LesterLyu/MOHLTC-DataProject"/>
            <Item name="Xlsx Populate"
                  description="A JavaScript library that creates or modifies MS Excel files. It supports real-time
                  formula evaluating and is able to run in the browser."
                  link="https://github.com/LesterLyu/xlsx-populate"/>
            <Item name="Excel Formula Parser"
                  description="A JavaScript library to parse and evaluate MS Excel/Google Sheets formulas with near 300
                   formulas support and competitive performance."
                  link="https://github.com/LesterLyu/fast-formula-parser"/>
            <Item name="Connect Four AI"
                  description="An  implementation of Minimax Algorithm on Connect Four with GUI."
                  link="https://github.com/LesterLyu/CSC384Project"/>
            <Item name="UofT Timetable"
                  description="A timetable Android app for students in University of Toronto."
                  link="https://github.com/LesterLyu/UofT-Timetable"/>
            <Item name="Acorn API"
                  description="An Acorn API for University of Toronto. Acorn is UofT' s student information service.
                   It has no public API. I wrote this to support the UofT Timetable above."
                  link="https://github.com/LesterLyu/AcornAPI"/>
            <Item name="Object Detection Webapp (requires camera)"
                  description="A react wrapper for object detection. Pre-trained Model is from Tenserflow.js "
                  link="https://lesterlyu.com/"/>
        </Container>
    );
}

export default Intro;
