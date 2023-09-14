import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import profileImg from "../../assets/images/profile.avif";

export const SinglePost = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(3),
    },
    root: {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    avatar: {
      backgroundColor: blue[500],
      "& > img": {
        objectFit: "cover",
        width: "100%",
        height: "100%",
      },
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img loading="lazy" src={profileImg} alt="profile img" />
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Hello</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem impusm felis Lorem impusm felis Lorem impusm felis Lorem
            impusm felis
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
