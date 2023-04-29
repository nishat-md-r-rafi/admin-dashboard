import React from "react";
import "./lists.scss";
import DataTable from './../../components/datatable/Datatable';

const Lists = ({columns, rows}) => {
  return (
  <div className="lists">

    <div className="listContainer">
      <DataTable columns={columns} rows={rows}/>
            
    </div> 
  </div>);
}

export default Lists;
