"use client"

import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

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
                pr-4
                transition-width
                duration-200
                ease-in-out
                bg-green-300`}>
                <div className={`
                    ${isOpen ? 'text-right' : 'text-center'}
                    mt-4`}>
                    <button onClick={toggleSidebar}>
                        <FiMenu size={24} />
                    </button>
                </div>
            
                <div className='mt-10'>
                    Menu
                </div>
            </div>
        </div>
    )
}

export default SideBarNav