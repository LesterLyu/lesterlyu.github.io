import { Grid, makeStyles, Typography } from "@material-ui/core";
import { PhoneAndroid } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  boldText: {
    fontSize: 28,
    fontWeight: 700,
  },
});

export default function usePhoneYears() {
  const classes = useStyles();
  const phoneBoughtTime = new Date('4/27/2017');
  const years = (Date.now() - phoneBoughtTime.getTime()) / (1000 * 60 * 60 * 24 * 365)

  return (
    <Grid container>
      <Grid item xs={2}>
        <PhoneAndroid fontSize="large" color="primary"/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h5">
          Samsung Galaxy S8+ bought on {phoneBoughtTime.toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={10} style={{paddingTop: 12}}>
        <Typography variant="h5" className={classes.boldText}>
          {years.toFixed(2)} Years
        </Typography>
      </Grid>
    </Grid>
  )
}
