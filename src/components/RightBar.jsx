import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Info } from "@material-ui/icons";
import apiRoot from "../API/api";
import { Link } from "react-router-dom";

const RightBar = () => {
  const [newPosts, setNewPosts] = useState();

  const useStyle = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(3),
      position: "sticky",
      top: 50,
    },
    avatarGroup: {
      "& > *": {
        cursor: "pointer",
      },
    },
    avatarsOnlineTitle: {
      fontSize: 16,
      fontWeight: 500,
      color: "#666",
      paddingBottom: theme.spacing(2),
    },
    onlineIcon: {
      display: "inline-block",
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: "greenyellow",
      verticalAlign: -1,
      marginLeft: 8,
    },
    newBlogsTilte: {
      marginTop: theme.spacing(2),
    },
    icon: {
      color: "#ddd",
    },
  }));

  const classes = useStyle();
  const token = localStorage.getItem("token");

  useEffect(() => {
    apiRoot
      .get(`/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.data) {
          setNewPosts(
            res.data.data.length <= 9
              ? res.data.data.reverse()
              : res.data.data.reverse().splice(0, 9)
          );
          // setDone(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {console.log(newPosts)}
      <Container className={classes.container}>
        <Typography
          className={`${classes.avatarsOnlineTitle} ${classes.newBlogsTilte} `}
        >
          New Blogs
        </Typography>
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
          {newPosts?.map((item) => (
            <Link to={`post/${item._id}`}>
              <ImageListItem cols={1}>
                <img className="newPostImg" src={item.imgLink} alt="item" />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>{item.desc}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about this`}
                      className={classes.icon}
                    >
                      <Info />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default RightBar;
