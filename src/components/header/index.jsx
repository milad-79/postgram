import { Stack, Badge, styled, Avatar } from "@mui/material";
import "./styles.css";
import { Settings ,Logout ,Email } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {Menu ,  MenuItem } from "@mui/material";
import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 3px",
      background: "#d90429",
      color: "#fff",
    },
  }));

  const handleSingout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        alert("Logout Worng");
      });
  };

  return (
    <header className="header">
      <div className="h-left">
        <div className="h-logo">
          <h4>Postgram</h4>
        </div>
      </div>

      <div className="h-right">
        <Stack direction="row" spacing={2} className="h-right-user">
          <Stack direction="row" spacing={1}>
            <Link to="/messages" className="h-button">
              <StyledBadge badgeContent={10} max={9}>
                <Email className="email-icon" />
              </StyledBadge>
            </Link>
            <Link to="/setting" className="h-button">
              <Settings className="setting-icon" />
            </Link>
          </Stack>
          <Avatar
            alt=""
            src="https://randomuser.me/api/portraits/men/41.jpg"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="avatar"
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            style={{
              marginTop: "3px",
            }}
          >
            <MenuItem onClick={handleSingout}>
              <Logout /> Logout
            </MenuItem>
          </Menu>
        </Stack>
      </div>
    </header>
  );
}

export default React.memo(Header);
