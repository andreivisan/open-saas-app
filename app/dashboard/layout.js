"use client"

import React from 'react'
import SideBarNav from '../components/dashboard/sidebar/SideNavBar'; 
import Header from '../components/dashboard/header/Header';

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
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout