import React from "react";
import "./topbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
function Topbar(props) {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon"></SearchOutlinedIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/cat-beauty-0-1495746002.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Topbar;
