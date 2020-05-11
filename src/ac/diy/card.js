import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
  Dialog, DialogContent
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 140,
    // minHeight: 180,
    maxWidth: 240,
    opacity: '90%',
    '&:hover': {
      zIndex: 1000,
      opacity: '100%',
      transform: 'scale(1.1)',
      transition: '0.2s all',
    }
  },
  media: {
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    whiteSpace: 'pre'
  }
});

export default function DiyCard({label, name, category, how, space, materials}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            className={classes.media}
            image={process.env.PUBLIC_URL + '/images/' + name + '.png'}
          />
          <CardContent>
            <Typography variant="body1">
              {label}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.text}>
              {space || ' '}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <Typography variant="body1">
            {label}
          </Typography>
          <CardMedia
            style={{width: 160, height: 160, imageRendering: 'pixelated'}}
            component="img"
            className={classes.media}
            image={process.env.PUBLIC_URL + '/images/' + name + '.png'}
          />
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.text}>
            {`占地面积：${space}\n种类：${category}\n获得途径：${how}\n材料：${materials}`}
          </Typography>


        </DialogContent>
      </Dialog>
    </>
  );
}
