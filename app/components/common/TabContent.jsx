"use client"

import React, { useState } from 'react'
import PostCard from './PostCard';

function TabContent({ firstTabName, secondTabName }) {
    const [isFirstTabActive, setIsFirstTabActive] = useState(true);
    const [isSecondTabActive, setIsSecondTabActive] = useState(false);

    const toggleFirstTab = (event) => {
        event.preventDefault();
        setIsSecondTabActive(false);
        setIsFirstTabActive(true);
    };

    const toggleSecondTab = (event) => {
        event.preventDefault();
        setIsFirstTabActive(false);
        setIsSecondTabActive(true);
    };

    return (
        <>
            <div className="
                    text-sm 
                    font-medium 
                    text-center 
                    text-black 
                    border-b
                    border-black
                    mr-20
                    md:ml-4
                    md:mt-10
                    mt-24">
                <ul className="
                        flex 
                        sm:flex-wrap 
                        -mb-px">
                    <li className="me-2">
                        <a href="#" onClick={toggleFirstTab} className={`
                            inline-block 
                            p-4 
                            rounded-t-lg
                            text-xl 
                            hover:text-gray-500 
                            ${isFirstTabActive ? 'border-b-4 border-black font-bold' : ''}`}>
                                {firstTabName}</a>
                    </li>
                    <li className="me-2">
                        <a href="#" onClick={toggleSecondTab} className={`
                                        inline-block
                                        p-4 
                                        rounded-t-lg
                                        text-xl
                                        hover:text-gray-500 
                                        ${isSecondTabActive ? 'border-b-4 border-black font-bold' : ''}`}>
                                            {secondTabName}</a>
                    </li>
                </ul>
            </div>
            <div>
                {isFirstTabActive && <PostCard title="My First Post" content="This is the content of my first post." />}
                {isSecondTabActive && <PostCard title="My Most Popular Post" content="This is the content of my most popular post." />}
            </div>
        </>
    )
}

export default TabContent