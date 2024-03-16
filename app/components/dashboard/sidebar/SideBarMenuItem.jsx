"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function SidebarMenuItem({icon, name, route, isOpen}) {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <Link
        href={route}
        className={`
            flex
            ${isOpen ? 'justify-start' : 'justify-center'}
            items-center
            p-4
            mt-5
            mb-5
            hover:bg-mintGreen rounded-r-full mr-2 ml-0'
            ${isActive ? 'bg-mintGreen shadow-mintGreen rounded-r-full mr-2 ml-0' : ''}`
        }
    >
        <div>{icon}</div>
        {isOpen && <div className="ml-4">{name}</div>}
    </Link>
  )
}

export default SidebarMenuItem