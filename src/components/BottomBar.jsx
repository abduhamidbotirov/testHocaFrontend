import { Container, Typography } from "@material-ui/core";
import { Bookmark, Home, People, Person, Settings } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      position: "fixed",
      bottom: "0",
      display: "flex",
      width:"100%",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#3f51b5",
      transition: "all 1s linear",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-evenly",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
    },
    item: {
      "& > a": {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
        color: theme.palette.common.white,
        transition: ".3s all",
        cursor: "pointer",
        textDecoration: "none",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#5362b2",
        },
      },
    },
    text: {
      fontSize: 12,
    },
  }));

  const classes = useStyles();
  const location = window.location.pathname;

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Link className={location == "/" ? "active" : ""} to="/">
          <Home className={classes.icon} />
          <Typography className={classes.text}>Home</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Link
          className={location == "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          <Person className={classes.icon} />
          <Typography className={classes.text}>Dashboard</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Link
          className={location == "/bookmarks" ? "active" : ""}
          to="/bookmarks"
        >
          <Bookmark className={classes.icon} />
          <Typography className={classes.text}>Bookmarks</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Link
          className={location == "/settings" ? "active" : ""}
          to="/settings"
        >
          <Settings className={classes.icon} />
          <Typography className={classes.text}>Settings</Typography>
        </Link>
      </div>
    </Container>
  );
};

export default BottomBar;
