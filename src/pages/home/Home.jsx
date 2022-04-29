import React from "react";
import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widgets from "../../components/widgets/Widgets";
import Topbar from "./../../components/topbar/Topbar";
import "./home.scss";

function Home(props) {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Topbar></Topbar>
        <div className="widgets">
          <Widgets type="user"></Widgets>
          <Widgets type="order"></Widgets>
          <Widgets type="balance"></Widgets>
          <Widgets type="earning"></Widgets>
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest News</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
