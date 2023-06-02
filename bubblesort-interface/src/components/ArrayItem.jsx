"use client";
import React from 'react'

function ArrayItem(props) {
    return (
        <div className='
        p-4 m-2 
        border border-solid border-teal-300 bg-cyan-950 
        h-20 justify-center items-center 
        text-center font-bold 
        rounded-lg text-4xl ' >
            {props.numero}
        </div>
    )
}

export default ArrayItem