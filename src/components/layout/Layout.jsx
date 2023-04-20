import React from 'react'
import './layout.scss'
// import Topbar from './../topbar/Topbar';
import Sidebar from './../sidebar/Sidebar';
import Navbar from './../navbar/Navbar';


export const Layout = ({children}) => {
  return (
    <div className='layOutContainer'>
        <Sidebar className="sideBar"/>

        <div className='mainContainer'>
          <div>
            {children}
          </div>
          <Navbar className="navBar"/>
        </div>
    </div>
  )
}
