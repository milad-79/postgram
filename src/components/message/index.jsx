import "./styless.css";
import { Link } from "react-router-dom";
import { ChevronRightRounded } from "@mui/icons-material";
import { styled ,IconButton } from "@mui/material";
import React from "react";


function Messages() {

  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));

  return (
    <div className="messages">
      <header className="header">
        <h2>Messages</h2>
        <Link to="/home">
            <BodyIcon disableRipple>
              <ChevronRightRounded/>
            </BodyIcon>
        </Link>
      </header>

      <ul className="body-messages">
        <li className="message-item">
          <div className="user-inf">
            <div className="user-img-message-div">
              <img
                className="user-img-message"
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt=""
              />
            </div>

            <div className="user-message-inf">
              <span className="user-message-name">Mike</span>
              <span className="user-message-message">
                Hi, im Mike and im a Devloper
              </span>
            </div>
          </div>

          <div className="user-time-sent">
            <span className="time-sent">31m Ago</span>
          </div>
        </li>

        <li className="message-item">
          <div className="user-inf">
            <div className="user-img-message-div">
              <img
                className="user-img-message"
                src="https://randomuser.me/api/portraits/women/49.jpg"
                alt=""
              />
            </div>

            <div className="user-message-inf">
              <span className="user-message-name">Lili</span>
              <span className="user-message-message">
                Hi, im Lili and im a Devloper
              </span>
            </div>
          </div>

          <div className="user-time-sent">
            <span className="time-sent">51m Ago</span>
          </div>
        </li>


        <li className="message-item">
          <div className="user-inf">
            <div className="user-img-message-div">
              <img
                className="user-img-message"
                src="https://randomuser.me/api/portraits/men/25.jpg"
                alt=""
              />
            </div>

            <div className="user-message-inf">
              <span className="user-message-name">Jack</span>
              <span className="user-message-message">
                Hi, im Jack and im a Devloper
              </span>
            </div>
          </div>

          <div className="user-time-sent">
            <span className="time-sent">42m Ago</span>
          </div>
        </li>

        <li className="message-item">
          <div className="user-inf">
            <div className="user-img-message-div">
              <img
                className="user-img-message"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              />
            </div>

            <div className="user-message-inf">
              <span className="user-message-name">Ming</span>
              <span className="user-message-message">
                Hi, im Ming and im a Devloper
              </span>
            </div>
          </div>

          <div className="user-time-sent">
            <span className="time-sent">52m Ago</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(Messages);
