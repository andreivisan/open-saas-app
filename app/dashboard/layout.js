"use client"

import React from 'react'
import SideBarNav from '../components/dashboard/sidebar/SideNavBar'; 

function DashboardLayout() {
  return (
    <div className='flex'>
        <SideBarNav />
    </div>
  )
}

export default DashboardLayout