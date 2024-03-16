"use client"

import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="
            relative">
      <button onClick={toggleMenu} className="focus:outline-none">
        <FaRegUserCircle size={24} />
      </button>
      <div className={`
            absolute 
            right-0 
            w-48 
            bg-white 
            border 
            border-gray-200 
            divide-y 
            divide-gray-100 
            rounded-md 
            shadow-lg
            transition-all
            duration-300 
            ${isOpen ? 'translate-y-0 opacity-100 z-20' : '-translate-y-all opacity-0'}`}>
          <div className="px-4 py-3">
            <p className="text-sm">Signed in as</p>
            <p className="text-sm font-medium">user@example.com</p>
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
          </div>
      </div>
    </div>
  );
}

export default UserMenu;