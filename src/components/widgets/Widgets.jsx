import React from "react";
import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

function Widgets({ type }) {
  // console.log(type);
  let data;
  const amount = 200;
  const diff = 100;
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "see all users",
        icon: <PeopleOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "see all orders",
        icon: <PeopleOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "Total Balance",
        isMoney: true,
        link: "see your Balance",
        icon: <PeopleOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "Total Earning",
        isMoney: true,
        link: "see your Earnings",
        icon: <PeopleOutlineOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="left">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
