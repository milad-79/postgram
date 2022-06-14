import "./styles.css";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LockIcon from "@mui/icons-material/Lock";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import PaletteIcon from "@mui/icons-material/Palette";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function Setting() {
  const IconBody = styled(IconButton)(({ theme }) => ({
    color: "#2b2d42",
  }));

  return (
    <div className="setting">
      <h1 className="setting-title">Setting</h1>
      <ul className="setting-items">
        <li className="setting-item">
          <IconBody disableRipple>
            <PersonAddAltRoundedIcon />
          </IconBody>
          <p className="title-setting-item">Follow and Invite Friends</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <NotificationsActiveRoundedIcon />
          </IconBody>
          <p className="title-setting-item">Notifications</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <LockIcon />
          </IconBody>
          <p className="title-setting-item">Privacy</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <GppGoodIcon />
          </IconBody>
          <p className="title-setting-item">Security</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <CampaignIcon />
          </IconBody>
          <p className="title-setting-item">Ads</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <AccountCircleIcon />
          </IconBody>
          <p className="title-setting-item">Account</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <HelpIcon />
          </IconBody>
          <p className="title-setting-item">Help</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <InfoIcon />
          </IconBody>
          <p className="title-setting-item">About</p>
        </li>

        <li className="setting-item">
          <IconBody disableRipple>
            <PaletteIcon />
          </IconBody>
          <p className="title-setting-item">Theme</p>
        </li>

        <Link to="/home">
          <li className="setting-item">
            <IconBody disableRipple>
              <ArrowBackIosNewRoundedIcon />
            </IconBody>
            <p className="title-setting-item">Back to Home</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default React.memo(Setting);
