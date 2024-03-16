import React from 'react'
import TabContent from '../../components/common/TabContent';

function MyPosts() {
  return (
    <div className="
            w-full
            md:mt-20
            p-4
            border-t-2
            border-zinc-100">
        <TabContent firstTabName="My Posts" secondTabName="Popular Posts" />
    </div>
  )
}

export default MyPosts