import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BottomBar from "../../components/BottomBar";
import Footer from "../../components/Footer";
import LeftBar from "../../components/LeftBar";
import NavBar from "../../components/Navbar";
import ProfilePic from "../../assets/images/profile.avif";

export const Settings = () => {
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
        <Grid item sm={10} className={classes.feed}>
          <h2 className="dashboardTitle">SETTINGS</h2>
          <form className="settings_main">
            <h2>Account Settings</h2>
            <div className="settings_div">
              <div>
                <img className="profileImg" src={ProfilePic} />
                <div>
                  <h3>Julianne Moore</h3>
                  <p>USERNAME</p>
                </div>
              </div>
              <div>
                <input type={"file"} id="file" />
                <label id="fileLabel" htmlFor="file">
                  Upload
                </label>
              </div>
            </div>
            <div className="settings_inputs">
              <input type={"text"} placeholder="First Name" />
              <input type={"text"} placeholder="Last Name" />
            </div>
            <div className="settings_inputs">
              <input type={"text"} placeholder="Username" />
              <input type={"number"} placeholder="Phone Number" />
            </div>
            <h2 className="passwordTitle">Password Settings</h2>
            <input
              className="passwordInput"
              type={"password"}
              placeholder="Old Password"
            />
            <input
              className="passwordInput"
              type={"password"}
              placeholder="New Password"
            />
            <input
              className="passwordInput"
              type={"password"}
              placeholder="Confirm New Password"
            />
            <div className="submitBtnDiv">
              <button id="submitBtn" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </Grid>
      </Grid>
      <Footer />
      <BottomBar />
    </>
  );
};
