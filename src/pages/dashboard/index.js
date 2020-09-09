import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  CircularProgress,
  makeStyles,
  CssBaseline
} from "@material-ui/core";
import { InfoOutlined, Timelapse, Timeline, Check } from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    marginTop: 20,
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
  const [state, setState] = useState({
    data: null,
    appliedDate: '2020-05-13'
  });

  useEffect(() => {
    (async function () {
      const res = await fetch('https://www.canada.ca/content/dam/ircc/documents/json/data-ptime-non-country-en.json');
      const json = await res.json();
      // console.log(json);
      setState(state => ({...state, data: json}));
    })();
  }, []);
  if (!state.data)
    return (
      <div style={{textAlign: 'center', marginTop: 22}}>
        <CircularProgress/>
      </div>
    );

  const requiredDays = Number.parseInt(state.data.work_extension_new_employer.online);
  const appliedDate = new Date(Date.parse(state.appliedDate));
  const EstimateDate = new Date(appliedDate.setDate(appliedDate.getDate() + requiredDays));

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} className={classes.card}>
              <Grid container>
                <Grid item xs={2}>
                  <InfoOutlined fontSize="large"/>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5">
                    Work permit from inside Canada (initial and extension)
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Timelapse fontSize="large"/>
                </Grid>

                <Grid item xs={10}>
                  <Typography variant="h5" className={classes.boldText}>
                    {state.data.work_extension_new_employer.online}
                  </Typography>
                </Grid>

                <Grid item xs={10}>
                  <Typography variant="body1">
                    Last updated on {state.data.work_extension_new_employer.lastupdated}
                  </Typography>
                </Grid>
              </Grid>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} className={classes.card}>

              <Grid container>
                <Grid item xs={2}>
                  <Timeline fontSize="large" color="primary"/>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5">
                    Applied on
                  </Typography>
                  <TextField
                    type="date"
                    value={state.appliedDate}
                    onChange={e => {
                      const {value} = e.target;
                      setState(state => ({...state, appliedDate: value}));
                    }}/>
                </Grid>
                <Grid item xs={12} style={{paddingTop: 12}}>
                </Grid>

                <Grid item xs={2}>
                  <Check fontSize="large"/>
                </Grid>

                <Grid item xs={10}>
                  <Typography variant="h5">
                    Estimated Approval on
                  </Typography>
                  <Typography variant="h5" className={classes.boldText}>
                    {EstimateDate.toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>

            </Paper>

          </Grid>

        </Grid>

      </Container>
    </React.Fragment>
  );
}
