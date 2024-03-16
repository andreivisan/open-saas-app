import React from 'react'
import UserMenu from './UserMenu'

function Header() {
  return (
    <div className="
        flex
        flex-row
        items-center
        justify-between
        absolute 
        w-full 
        h-20
        p-8 
        bg-white">
        <h1 className='
              text-3xl
              font-bold'>
          OPEN SAAS
        </h1>
        <UserMenu />
    </div>
  )
}

export default Header