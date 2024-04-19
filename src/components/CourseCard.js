import React from 'react'
import cardimg from'../assets/cardcourses.jpg';
import { Link } from 'react-router-dom';
import { CgTimelapse } from "react-icons/cg";
import './CourseCard.css';

const CourseCard=(props)=>{
    const { id, name, description, time } = props
    return (
        <div className='flex flex-row gap-x-2 realtive shadow-sm shadow-darkestpurple rounded-xl items-center justify-between bg-purple-50 my-1 px-7 py-4 max-w-[1024px] mx-auto'>
           <div>
            <img src={cardimg} alt='cards' className='w-[740px]  pr-4 h-[340px] img1'/>
           </div>
           <div className='flex flex-col items-center max-w-[650px]  gap-y-1'>
            <h2 className='font-bold text-4xl font-co text-fuchsia-900'>{name}</h2>
            <p className='font-mullish text-xl opacity-90 text-darkestpurple px-1 '>{description}</p>
            <div className='flex flex-row gap-x-2 mt-8 items-center'>
                <CgTimelapse className='w-[30px] h-[30px] icon2'/>
                <p className='text-darkestpurple font-bold '>{time}</p>
            </div>
            <button type='button' className='w-4/12 px-5 py-[10px] mt-5 rounded-lg bg-dpurple hover:bg-sunny cursor-pointer'>
               <Link  to={`/courses/${id}`} ><p className='font-bol text-white text-2xl  '>Learn More</p></Link>
            </button>
           </div>
        </div>
    )
}

export default CourseCard;