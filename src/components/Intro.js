import {Typography, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {OpenInNew, Star} from "@material-ui/icons";

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
    demo: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#3b6ae9',
        "&:hover": {
            color: '#2196f3'
        },
    },
    noDemo: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#3b6ae9',
        textDecoration: 'line-through'
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
    },
    itemInterest: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#000',
    },
    itemCompany: {
        fontSize: 17,
        fontWeight: 400,
        textAlign: 'initial',
        color: '#7a7a7a',
        "&:hover": {
            color: '#2196f3'
        },
    },
    resume: {
        paddingTop: 16,
        display: 'block',
        fontWeight: 'bold',
        fontFamily: 'Ubuntu',
        textAlign: 'initial',
        fontSize: 26,
        color: '#000',
        "&:hover": {
          color: '#2196f3'
        },
    }
});

export function Resume() {
    const classes = useStyles();
    return (
        <Link className={classes.resume} href={'/resume.pdf'} target="_blank">
            Resume
            <OpenInNew fontSize="inherit"/>
        </Link>
    )
}

export function Title(props) {
    const classes = useStyles();
    return (
        <Typography className={classes.title} variant="h5" gutterBottom>
            {props.name}
        </Typography>
    );
}

export function Item(props) {
    const {name, description, link, demo, playStore, noDemo} = props;
    const classes = useStyles();
    return (
        <div className={classes.itemRoot}>
            <Link className={classes.item} href={link} target="_blank">
                {name}
                <OpenInNew fontSize="inherit"/>
            </Link>
            {demo ?
                <span>
                    {' · '}
                    <RouterLink className={classes.demo} to={demo}>
                        demo
                        <Star fontSize="inherit"/>
                    </RouterLink>
                </span>
                : null
            }

            {noDemo ?
                <span>
                        {' · '}
                    <span className={classes.noDemo}>
                        demo
                        <Star fontSize="inherit"/>
                    </span>
                </span>
                : null
            }
            {playStore ?
                <span>
                    {' · '}
                    <Link className={classes.demo} href={playStore} target="_blank">
                        Play Store
                        <OpenInNew fontSize="inherit"/>
                    </Link>
                </span>
                : null
            }

            {' · '}
            <span className={classes.itemDescription}>
                {description}
            </span>
        </div>
    );
}

export function Interest({name}) {
    const classes = useStyles();
    return (
        <div className={classes.itemRoot}>
            <span className={classes.itemInterest}>
                {name}
            </span>
        </div>
    );
}

export function Experience({title, company, link, duration}) {
    const classes = useStyles();
    return (
        <div className={classes.itemRoot}>
            <span className={classes.itemInterest}>
                {title}
            </span>
            {' · '}
            <span className={classes.itemDescription}>
                {duration}
            </span>
            <br/>
            {link ? <Link className={classes.itemCompany} href={link} target="_blank">
                    {company}
                </Link> :
                <span className={classes.itemDescription}>
                    {company}
                </span>
            }
        </div>
    );
}

export function Education() {
    const classes = useStyles();
    return (
        <div className={classes.itemRoot}>
            <div style={{paddingBottom: 15}}>
                <span className={classes.itemInterest}>
                     Bachelor of Science · University of Toronto · Graduating 2020 May
                </span>
            </div>
            <div className={classes.itemInterest} style={{paddingBottom: 15, paddingLeft: 20}}>
                - Computer Science Specialist · Focus on Artificial Intelligent & Computer Networks
            </div>
            <div className={classes.itemInterest} style={{paddingLeft: 20}}>
                - Statistics Minor
            </div>
        </div>
    );
}

export function Footer() {
    return <span style={{color: '#aaa', paddingBottom: 10}}>Copyright © 2019-2020 Dishu(Lester) Lyu</span>
}
