import React, { useState } from "react";
import { Grid, InputBase, Checkbox, FormControlLabel } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

/**
 * @type Array
 */
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
  const doneStr = localStorage.getItem('done');
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [showAll, setShowAll] = useState((localStorage.getItem('showAll') || 'true') === 'true');

  const cards = [];
  const [doneItems, setDoneItems] = useState(doneStr ? JSON.parse(doneStr) : []);
  console.log(doneItems)

  const handleClickShowAll = () => {
    localStorage.setItem('showAll', (!showAll).toString())
    setShowAll(showAll => !showAll);
  }

  const handleClickDone = name => e => {
    e.stopPropagation();
    const doneItemIdx = items.findIndex(item => item.name === name);
    if (doneItems.includes(doneItemIdx)) {
      doneItems.splice(doneItems.indexOf(doneItemIdx));
    } else {
      doneItems.push(doneItemIdx);
    }
    localStorage.setItem('done', JSON.stringify(doneItems));
    if (!showAll)
      setDoneItems([...doneItems])
    console.log(doneItems)
  };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!showAll && doneItems.includes(i)) continue;

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
            handleClickDone={handleClickDone(item.name)}
            initialDone={doneItems.includes(i)}
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
        <FormControlLabel
          control={<Checkbox color="primary" checked={showAll} onChange={handleClickShowAll}/>}
          label="All"
          labelPlacement="end"
        />
      </div>
      <Grid container spacing={2} justify="center" style={{marginTop: 40}}>
        {cards}
      </Grid>
    </div>
  )
}
