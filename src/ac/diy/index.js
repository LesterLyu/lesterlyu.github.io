import React, { useState } from "react";
import { Grid, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import items from './diy.json';

import DiyCard from './card';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'fixed',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    marginLeft: theme.spacing(3),
    width: 'auto',
    marginBottom: 10,
    zIndex: 1000,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export function Diy() {
  document.title = "Animal Crossing"
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const cards = [];
  console.log(items)

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (searchValue === '' || item.label.includes(searchValue))
      cards.push(
        <Grid item key={i}>
          <DiyCard
            category={item.category}
            label={item.label}
            how={item.how}
            name={item.name}
            space={item.space}
            materials={item.materials}
            idx={i}
          />
        </Grid>)
  }
  return (
    <div style={{
      backgroundColor: 'rgb(255, 246, 212)',
      backgroundImage: 'url("/dark-wood.png")',
      backgroundAttachment: 'fixed',
      paddingTop: 20,
      height: '100%',
    }}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <Grid container spacing={2} justify="center" style={{marginTop: 40}}>
        {cards}
      </Grid>
    </div>
  )
}
