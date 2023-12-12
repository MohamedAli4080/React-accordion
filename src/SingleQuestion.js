import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
export const SingleQuestion = ({title,info}) => {
const [showData,setShowData]=useState(false);
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button onClick={()=>setShowData(!showData)}>
           {showData ?<FaWindowMinimize />:<FaPlus />} 
            </button>

        </header>
      {showData && <p>{info}</p>}
    </article>
  )
}
