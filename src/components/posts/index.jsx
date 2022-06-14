import { useEffect, useState } from "react";
import React from "react";
import { getPost } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Card,
  Box,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
  CardContent,
  Skeleton,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.css";
import Header from "../header/index";
import BottomNav from "../bottom-navigation";
import Icons from "./icons";

const Posts = () => {
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  const { faker } = require("@faker-js/faker");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    dispatch(getPost()).then(() => {
      setLoad(false);
    });
  }, [dispatch]);

  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));

  const TitleContent = styled(CardContent)(({ theme }) => ({
    marginTop: "10px",
    paddingTop: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "0px",
  }));

  const PostConetenet = styled(CardContent)(({ theme }) => ({
    paddingTop: "8px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "0px",
  }));

  return (
    <div className="post-main-body">
      <Header />

      {load
        ? post &&
          post.map((item) => (
            <Box
              sx={{ maxWidth: "345px", margin: "5px auto" }}
              component="div"
              key={item.id}
            >
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{
                  margin: "10px 0",
                }}
              />
              <Skeleton variant="rectangular" width={"100%"} height={200} />
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "10px",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "5px",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "5px",
                }}
              />

              <Skeleton
                variant="text"
                sx={{
                  marginTop: "5px",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "5px",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "5px",
                }}
              />
            </Box>
          ))
        : post &&
          post.map((item) => (
            <Box
              sx={{ maxWidth: "345px", margin: "5px auto" }}
              component="div"
              key={item.id}
            >
              <Card sx={{ width: "100%" }}>
                <CardHeader
                  avatar={<Avatar src={faker.image.avatar()} style={{
                    cursor: 'pointer'
                  }}/>}
                  action={
                    <BodyIcon disableRipple>
                      <MoreVertIcon />
                    </BodyIcon>
                  }
                  title={faker.name.findName()}
                  sx={{
                    height: "30px",
                  }}
                />

                <CardMedia
                  component="img"
                  src={faker.image.image()}
                  height="200"
                  sx={{
                    objectFit: "cover",
                  }}
                  alt="post"
                />

                <TitleContent>
                  <p className="title-post">
                    {faker.name.findName()}: {item.title}
                  </p>
                </TitleContent>
                <PostConetenet>
                  <p className="content-post">{item.body}</p>
                </PostConetenet>

                <Icons />
              </Card>
            </Box>
          ))}
      <BottomNav />
    </div>
  );
};

export default React.memo(Posts);
