import { styled, CardActions, IconButton } from "@mui/material";
import { Favorite, Share, Send ,FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Icons() {
  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));

  const[like ,setLike]= useState(false);

  const handeleLike =()=>{
    setLike(!like)
  }


  return (
    <CardActions>
      <BodyIcon disableRipple onClick={handeleLike}>
        {
            like ?
            <Favorite className="Heart" />
            :
            <FavoriteBorder/>
        }
      </BodyIcon>

      <BodyIcon disableRipple>
        <Share className="share-icon"/>
      </BodyIcon>

      <Link to='/comments'>
      <BodyIcon disableRipple>
        <Send />
      </BodyIcon>
      </Link>
    </CardActions>
  );
}

export default React.memo(Icons);
