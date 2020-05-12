import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
  Dialog, DialogContent, Grow, IconButton
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/DoneRounded';

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    minHeight: 240,
    // minHeight: 180,
    // maxWidth: 240,
    opacity: '90%',
    background: 'rgb(255, 222, 156)',
    border: 'white solid 6px',
    borderRadius: 6,
    '&:hover': {
      zIndex: 1000,
      opacity: '100%',
      transform: 'scale(1.1)',
      transition: '0.2s all',
    }
  },
  media: {
    width: 128,
    height: 128,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontFamily: '华文圆体',
    fontWeight: 1000,
    whiteSpace: 'pre',
    fontSize: 16,
    color: 'rgba(110,43,0,0.85)'
  },
  title: {
    fontFamily: '华文圆体',
    fontWeight: 1000,
    fontSize: 18,
    color: '#6e2b00'
  },
  hr: {
    borderTop: '2px dashed #6e2b00',
  },
  dialog: {
    backgroundColor: 'rgb(255, 246, 212)'
  },
  iconButton: {
    float: 'right'
  },
  iconNotDone: {
    color: 'rgba(110,43,0,0.15)',
    '&:hover': {
      color: 'rgba(110,43,0,0.64)',
    }
  },
  iconDone: {
    color: '#6e2b00'
  }
});

export default function DiyCard({label, name, category, how, space, materials, idx, handleClickDone, initialDone}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(initialDone);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const imagePath = process.env.PUBLIC_URL + '/large/' + idx + '.png';

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen} component="div">
          <CardMedia
            component="img"
            className={classes.media}
            image={imagePath}
          />
          <CardContent>
            <Typography variant="body1" className={classes.title}>
              {label}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.text}>
              {space || ' '}
              <IconButton size="small" className={classes.iconButton} onClick={e => {
                handleClickDone(e);
                setDone(done => !done);
              }}>
                <DoneIcon color="inherit" className={done ? classes.iconDone : classes.iconNotDone}/>
              </IconButton>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog onClose={handleClose} open={open} TransitionComponent={Grow}>
        <DialogContent className={classes.dialog}>
          <Typography variant="body1" className={classes.title}>
            {label}
          </Typography>
          <hr className={classes.hr}/>
          <Typography variant="body2" className={classes.title}>
            {space}
          </Typography>
          <CardMedia
            style={{width: 256, height: 256}}
            component="img"
            className={classes.media}
            image={imagePath}
          />
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.text}>
            {(category ? `种类：${category}\n` : '') +
            (how ? `获得途径：${how}\n` : '') +
            `材料：${materials}`}
          </Typography>


        </DialogContent>
      </Dialog>
    </>
  );
}
