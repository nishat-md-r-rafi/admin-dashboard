import React from "react";
import "./lists.scss";
import Sidebar from './../../components/sidebar/Sidebar';
import Topbar from './../../components/topbar/Topbar';
import DataTable from './../../components/datatable/Datatable';

const Lists = () => {
  return (
  <div className="lists">
    <Sidebar className="sideBar"/>

    <div className="listContainer">
      <Topbar/>
      <DataTable></DataTable>
            
    </div> 
  </div>);
}

export default Lists;
