import styled from "@emotion/styled";
import { ChevronRightRounded ,Camera } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Profile() {
  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));
  
  const[img ,setImg] = useState('https://randomuser.me/api/portraits/men/41.jpg')
  return (
    <div className="profile">
      <header className="header">
        <h2>Profile</h2>
        <Link to="/home">
          <BodyIcon disableRipple>
            <ChevronRightRounded />
          </BodyIcon>
        </Link>
      </header>

      <div className="profile-body">
        <div className="body-img-profile">
          <img
            src={img}
            alt=""
            className="profile-img"
          />
          <label htmlFor="userImg" className="select-img-user" >
              <Camera/>
          </label>
          <input type="file" id="userImg" style={{display: 'none'}} onChange={(e)=>{
            setImg(e.target.value)
            console.log(img)
          }}/>
        </div>

        <div className="body-inf-user">
            <form>
            <label>UserName:</label>
            <input type="text" placeholder="milad79"/>

            <label>Email:</label>
            <input type="email" placeholder="exampel@gmail.com"/>

            <label>Password:</label>
            <input type="password" placeholder="password"/>

            <label>Mobile Number:</label>
            <input type="text" placeholder="+98 1000000"/>

            <button>
               Update
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Profile);
