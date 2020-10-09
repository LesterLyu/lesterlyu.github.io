import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Grid,
  makeStyles,
  CssBaseline
} from "@material-ui/core";
import usePhoneYears from './PhoneYears'
import useWorkPermitCards from './WorkPermit'

const useStyles = makeStyles({
  container: {
    paddingTop: 20,
  },
  boldText: {
    fontSize: 28,
    fontWeight: 700,
  },
  card: {
    margin: 6,
    padding: 18,
    minHeight: 100,
  }
});

export default function Dashboard() {
  const classes = useStyles();

  const [workPermitTimeCard, EstimatedTimeCard] = useWorkPermitCards();
  const phoneYearsCard = usePhoneYears();

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} className={classes.card}>
              {workPermitTimeCard}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} className={classes.card}>
              {EstimatedTimeCard}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} className={classes.card}>
              {phoneYearsCard}
            </Paper>
          </Grid>

        </Grid>

      </Container>
    </React.Fragment>
  );
}
