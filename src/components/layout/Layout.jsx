import React from 'react'
import './layout.scss'
import Topbar from './../topbar/Topbar';
import Sidebar from './../sidebar/Sidebar';

export const Layout = ({children}) => {
  return (
    <div className='layOutContainer'>
        <Sidebar className="sideBar"/>
        <main>{children}</main>
        <Topbar className="topBar"/>
    </div>
  )
}
