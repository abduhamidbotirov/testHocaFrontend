import React, { Suspense, useEffect, useRef, useState } from "react";
import { paginate } from "../utils/paginate";
import Post from "./Post";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import apiRoot from "../API/api";

const Posts = () => {
  const useStyles = makeStyles((theme) => ({
    pagination: {
      marginTop: 20,
      "& > ul": {
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        "& > ul > li > button": {
          width: 20,
          height: 32,
          margin: "0 1px",
        },
      },
      "& > ul > li > button:hover": {
        background: "#79bef5",
        color: "#fff",
      },
    },
  }));

  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [posts, setPosts] = useState();

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
          setPosts(res.data.data);
        }
      });
  }, []);

  const getData = (posts, currentPage, pageSize) => {
    const selectedPosts = paginate(posts, currentPage, pageSize);

    return {
      totalCount: posts?.length,
      selectedPosts: selectedPosts,
    };
  };

  const wrapperRef = useRef();

  const changePageHandler = (event, value) => {
    setCurrentPage(value);
    wrapperRef.current.scrollIntoView();
  };

  const { selectedPosts, totalCount } = getData(posts, currentPage, pageSize);

  return (
    <div id="wrapper" ref={wrapperRef}>
      <Suspense fallback={<h1>Loading....</h1>}>
        <ShowPosts posts={selectedPosts} />
      </Suspense>
      <Stack spacing={2} style={{ marginBottom: 10 }}>
        <Pagination
          onChange={changePageHandler}
          color="primary"
          count={totalCount / pageSize}
          page={currentPage}
          className={classes.pagination}
        />
      </Stack>
    </div>
  );
};

function ShowPosts({ posts }) {
  return (
    <div id="posts">
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            user={post?.user || ""}
            profile={post?.user?.profile || ""}
            blogImage={post.imgLink}
            title={post.title}
            created={post.updatedAt}
            content={post.desc}
            cost={post.price}
            likes={post.like}
            dislike={post.dislike}
            comments={post.comments.length}
            shares={post?.shares || 0}
            id={post._id}
          />
        );
      })}
    </div>
  );
}

export default Posts;
