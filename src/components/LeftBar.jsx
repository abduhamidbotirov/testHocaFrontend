import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import {
  Home,
  Person,
  Settings,
  Bookmark,
  ExitToAppRounded,
  Favorite,
  People,
  ArrowForward,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const useStyle = makeStyles((theme) => ({
    container: {
      backgroundColor: "#3f51b5",
      minHeight: "100vh",
      padding: 0,
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 45,
    },
    item: {
      "& > a": {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        color: theme.palette.common.white,
        transition: ".3s all",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "#5362b2",
        },
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      fontSize: "30px",
    },
    text: {
      marginTop: "2px",
    },
    arrow: {
      backgroundColor: "#3f51b5",
      position: "absolute",
      top: "10%",
      right: "-35px",
      padding: 5,
      borderTopRightRadius: "7px",
      borderBottomRightRadius: "7px",
      color: "#fff",
      width: 30,
      height: 30,
      cursor: "pointer",
    },
  }));

  const [isSideOut, setIsSideOut] = useState(false);

  const classes = useStyle(isSideOut);

  const location = window.location.pathname;

  return (
    <>
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
          <Link className={location == "/bookmarks" ? "active" : ""} to="/bookmarks">
            <Favorite className={classes.icon} />
            <Typography className={classes.text}>Bookmarks</Typography>
          </Link>
        </div>

        <div className={classes.item}>
          <Link className={location == "/settings" ? "active" : ""} to="/settings">
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LeftBar;
