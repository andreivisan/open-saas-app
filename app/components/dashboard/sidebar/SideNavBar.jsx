"use client"

import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

import SidebarMenuItem from './SidebarMenuItem';
import SideBarMenuItems from '../../../data/side-bar-menu-items';

function SideBarNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`   
                flex-n 
                ${isOpen ? 'lg:w-80' : 'lg:w-20'}
                w-full 
                h-screen
                pt-4
                pr-8
                pl-8
                transition-width
                duration-200
                ease-in-out
                bg-white
                border-r-2
                border-zinc-100`}>
                <div className={`
                    ${isOpen ? 'text-right' : 'text-center'}
                    mt-4`}>
                    <button onClick={toggleSidebar}>
                        <FiMenu size={24} />
                    </button>
                </div>
            
                <div className='mt-10'>
                    {SideBarMenuItems.map((item, index) => (
                        <SidebarMenuItem key={index} icon={item.icon} name={item.name} route={item.route} isOpen={isOpen} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBarNav