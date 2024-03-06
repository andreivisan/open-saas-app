"use client"

import React from 'react'
import SideBarNav from '../components/dashboard/sidebar/SideNavBar'; 
import Header from '../components/dashboard/header/Header';
import DashboardHomePage from '../components/dashboard/home/DashboardHomePage';

function DashboardLayout({ children }) {
  return (
    <div className='flex'>
        <SideBarNav />
        <div className="
                flex-1 
                md:flex 
                h-screen 
                relative">
            <Header />
            <DashboardHomePage />
        </div>
    </div>
  )
}

export default DashboardLayout