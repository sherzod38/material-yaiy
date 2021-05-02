import imgLink from "../../assets/images/f5.jpg";
import "./Section1.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper/Paper";

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

const styles = {
  el: {
    marginBottom: "30px",
  },
  //   pa: {
  //     Position: "absolute",
  //   },
  pr: {
    position: "relative",
  },
  wt: {
    width: "100%",
    height: "300px",
  },
};
{
  /* <img style="display:none" src="https://source.unsplash.com/random"> */
}

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    padding: '700px',
    height: '700px',

    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundOverlay: "rgba(0,0,0,.3)",
  },
}));

const Section1 = () => {
  const classes = useStyle;
  return (
    <Container>
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Asslomu alaykum.
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam nulla tempora, veniam iste odio error voluptates
                    nam rerum temporibus voluptas facilis eius maiores illo
                    officiis non sequi, tenetur at doloribus!
                  </Typography>
                  <Button variant="contained" color="primary">
                    Continue reading ...
                  </Button>
                </div>
              </Grid>
              <Grid item md={6}></Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </Container>
  );
};

export default Section1;
