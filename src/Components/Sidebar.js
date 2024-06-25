import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import React from "react";
import { Article, Settings, StickyNote2 } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import Switch from "@mui/material/Switch";

const Sidebar = () => {
  return (
    <Box flex={1} p={2}>
      <div className="side_nav">
        <div className="side_buttons">
          <button className="side_button">
            <HomeIcon />
            <span>Home</span>
          </button>
          <button className="side_button">
            <Article />
            <span>Pages</span>
          </button>
          <button className="side_button">
            <GroupIcon />
            <span>Groups</span>
          </button>
          <button className="side_button">
            <i class="fa-regular fa-message"></i>
            <StorefrontIcon />
            <span>Marketplace</span>
          </button>
          <button className="side_button">
            <PersonAddIcon />

            <span>Friends</span>
          </button>
          <button className="side_button">
            <AccountBoxIcon />

            <span>Proflie</span>
          </button>
          <button className="side_button">
            <ModeNightIcon />

            <span>
              {" "}
              <Switch />
            </span>
          </button>
          <button className="side_button">
            <Settings />
            <span>Settings</span>
          </button>
          <button className="side_button">
            <StickyNote2 />
            <span>Pages</span>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Sidebar;
