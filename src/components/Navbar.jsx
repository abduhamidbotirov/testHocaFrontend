import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import { Search, Notifications, Mail, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const useStyle = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: (props) => (props.isOpen ? "0" : "16px"),
    },
    logoSm: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.isOpen ? "none" : "block"),
      },
    },
    logoLg: {
      display: "block",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,
      padding: "10px",
      width: "50%",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.down("xs")]: {
        display: (props) => (props.isOpen ? "flex" : "none"),
        width: "60%",
      },
    },
    searchIcon: {
      marginRight: theme.spacing(1),
    },
    closeIcon: {
      display: "none",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        display: (props) => (props.isOpen ? "block" : "none"),
      },
    },
    inputTextSearch: {
      width: "100%",
      color: theme.palette.common.white,
      "&:placeholder": {
        color: theme.palette.common.white,
      },
    },
    icon: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatarImage: {
      width: "30px",
      height: "30px",
      cursor: "pointer",
      border: "2px solid #fff",
    },
    badge: {
      marginRight: theme.spacing(3),
      cursor: "pointer",
    },
    searchButton: {
      display: "none",
      marginRight: theme.spacing(3),
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        display: (props) => (props.isOpen ? "none" : "block"),
      },
    },
  }));

  const [isOpen, setIsOpen] = useState(false);
  let [profile, setProfile] = useState(false);
  let [notifications, setNotifications] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const classes = useStyle({ isOpen });

  useEffect(() => {}, []);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logoLg}>
            ZpLearn Blog
          </Typography>
          <Typography variant="h5" className={classes.logoSm}>
            Blog
          </Typography>
          <div className={classes.search}>
            <Search className={classes.searchIcon} />
            <InputBase
              className={classes.inputTextSearch}
              placeholder="searcher..."
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Close
              className={classes.closeIcon}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className={classes.icon}>
            <Search
              className={classes.searchButton}
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <Badge
              badgeContent={0}
              color="error"
              className={classes.badge}
              overlap="rectangular"
              onClick={() => {
                setNotifications((prev) => !prev);
                setProfile(false);
              }}
            >
              <Notifications />
            </Badge>
            {notifications == true ? (
              <div className="notificationsBox">
                <span className="notificationsTitle">Notifications</span>
                <hr className="notificationsLine"/>
                <div className="notificationsData"></div>
              </div>
            ) : (
              ""
            )}
            <button
              className="ProfileBtn"
              onClick={() => {
                setProfile((prev) => !prev);
                setNotifications(false);
              }}
              onDoubleClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                window.location.replace("/login");
              }}
            >
              <Avatar
                className={classes.avatarImage}
                alt="Remy Sharp"
                src="https://v4.mui.com/static/images/avatar/2.jpg"
              />
            </button>
            {profile == true ? (
              <div className="logOut">
                <Link
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                  }}
                >
                  Log Out
                </Link>
                <div className="logOutOrDiv">
                  <p>--</p>
                  <strong>OR</strong>
                  <p>--</p>
                </div>
                <p className="logOutOrInfo">
                  Double click to profile image to logout
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
