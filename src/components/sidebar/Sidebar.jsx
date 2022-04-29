import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon"></PersonOutlineIcon>
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon"></ProductionQuantityLimitsIcon>
            <span>Products</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon"></DeliveryDiningOutlinedIcon>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon"></QueryStatsOutlinedIcon>
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsOutlinedIcon className="icon"></CircleNotificationsOutlinedIcon>
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodOutlinedIcon className="icon"></SystemSecurityUpdateGoodOutlinedIcon>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"></PsychologyOutlinedIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"></SettingsOutlinedIcon>
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AssignmentIndOutlinedIcon className="icon"></AssignmentIndOutlinedIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"></LogoutOutlinedIcon>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
}

export default Sidebar;
