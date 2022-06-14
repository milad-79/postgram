import "./styles.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function BottomNav() {
 
//  costom buttom 
  const BodyIcon = styled(IconButton)(({ theme }) => ({
    color: "#000",
  }));

  return (
    <div className="bottom-nav">
      <BottomNavigation sx={{borderTop: '1px solid #ced4da'}}>
        <BottomNavigationAction
          icon={
            <BodyIcon>
              <HomeRoundedIcon />
            </BodyIcon>
          }
        />
        <BottomNavigationAction
          icon={
            <BodyIcon>
              <SearchIcon />
            </BodyIcon>
          }
        />
        <BottomNavigationAction
          icon={
            <BodyIcon>
              <AddIcon />
            </BodyIcon>
          }
        />

{/* link to profile */}
        <BottomNavigationAction
          icon={
            <Link to="/profile">
              <BodyIcon>
                <PersonIcon />
              </BodyIcon>
            </Link>
          }
        />
      </BottomNavigation>
    </div>
  );
}

export default React.memo(BottomNav);
