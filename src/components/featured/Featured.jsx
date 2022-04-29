import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Featured(props) {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" />
        </div>
        <p className="title">The total number of sales</p>
        <p className="amount">$420</p>
        <p className="description">
          The previous section is processing. This is new session.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Title</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon />
              $12.2k
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Title</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon />
              $12.2k
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Title</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon />
              $12.2k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
