import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BottomBar from "../../components/BottomBar";
import Feed from "../../components/Feed";
import Footer from "../../components/Footer";
import LeftBar from "../../components/LeftBar";
import NavBar from "../../components/Navbar";

export const Bookmarks = () => {
  const useStyle = makeStyles((theme) => ({
    container: {
      justifyContent: "space-between",
    },
    leftBar: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    feed: {
      [theme.breakpoints.down("sm")]: {
        order: 3,
      },
    },
    rightBar: {},
  }));

  const classes = useStyle();
  return (
    <>
      <NavBar />
      <Grid container className={classes.container}>
        <Grid item sm={2} className={classes.leftBar}>
          <LeftBar />
        </Grid>
        <Grid item sm={8} md={10} className={classes.feed}>
          <h2 className="dashboardTitle">THE POSTS THAT YOU LIKED</h2>
          <Feed />
        </Grid>
      </Grid>
      <Footer />
      <BottomBar />
    </>
  );
};
