import React from 'react'
import { FaRegStar, FaRegUser } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

function PostCard({ title, content }) {
  return (
    <div id="defaultTabContent">
        <div className="
                p-4 
                rounded-lg
                border
                border-gray-300
                mr-20
                md:ml-4
                md:mt-8
                mt-2 
                md:p-4
                bg-white" id="about">
            <h2 className="
                    mb-3 
                    text-2xl 
                    font-bold 
                    tracking-tight 
                    text-black">{title}</h2>
            <p className="
                    mb-3 
                    text-black">{content}</p>
            <div className='
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    items-center 
                    w-full'>
              <div className='
                    inline-flex
                    item-center'>
                      <div className='
                            inline-flex
                            item-center'>
                                <FaRegStar />
                                <p className="
                                    text-sm
                                    ml-1">
                                      16
                                </p>   
                      </div>
                      <div className='
                            inline-flex
                            item-center
                            ml-4'>
                                <FaRegUser />
                                <p className="
                                    text-sm
                                    ml-1">
                                      username
                                </p>   
                      </div>
                      <div className='
                            inline-flex
                            item-center
                            ml-4'>
                                <SlMagnifier />
                                <p className="
                                    text-sm
                                    ml-1">
                                      details
                                </p>   
                      </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard