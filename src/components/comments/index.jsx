import "./styles.css";
import { ChevronRightRounded, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled, IconButton, Snackbar, Alert } from "@mui/material";
import React, { useState, useRef } from "react";


function Comments() {
  // coustom icon
  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));

  const refInput = useRef();

  const [message, setMessage] = useState([]);

  const [openAlret, setOpenAlret] = React.useState(false);

  const handleCloseAlret = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlret(false);
  };

  const handleSend = () => {
    if (refInput.current.value === ""){
      
      setOpenAlret(true);

    } else {
      
      let userMessage = { message: refInput.current.value };
      setMessage([...message, userMessage]);
      refInput.current.value = "";
    
    }
  };

  return (
    <div className="message">
      <header className="header">
        <h2>Comments</h2>
        <Link to="/home">
          <BodyIcon disableRipple>
            <ChevronRightRounded />
          </BodyIcon>
        </Link>
      </header>

      <div className="message-body">
        {message.length ? (
          message.map((item, idx) => (
            <div className="body-message-user" key={idx}>
              <div className="message-img">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  alt=""
                  className="img-user-message"
                />
              </div>
              <div className="message-content">
                <p className="content-user-message">{item.message}</p>
              </div>
              <div className="message-time">
                {Math.floor(Math.random() * 60) + 1}m Age
              </div>
            </div>
          ))
        ) : (
          <span className="no-message">No Message</span>
        )}
      </div>

      <div className="message-input">
        <input
          type="text"
          className="message-input-value"
          placeholder="Message..."
          ref={refInput}
        />
        <IconButton
          disableRipple
          sx={{ cursor: "pointer", color: "#2b2d42"}}
          onClick={handleSend}
        >
          <Send />
        </IconButton>
      </div>

      <Snackbar open={openAlret} autoHideDuration={6000} onClose={handleCloseAlret}>
        <Alert onClose={handleCloseAlret} severity="error" sx={{ width: '100%' }}>
          You Can't Send Empty Message !!! 
        </Alert>
      </Snackbar>
    </div>
  );
}

export default React.memo(Comments);
