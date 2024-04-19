import React from "react";
import bg from  '../assets/eventheader.png'
import courseData from '../data';
import CourseCard from '../components/CourseCard'
import Select from 'react-select'
import img from '../assets/triangle.png';

const Course=() =>{
    //search functionality remaining to be implemented
    return(
       <div className="mx-auto relative">
           <div className=" bg-darkestpurple ">
            <div className="flex flex-row gap-x-3 items-center w-7/12 pt-[55px]  mx-auto justify-between">
            <div className="flex flex-col gap-y-2 items-center z-10 ">
                <p className="text-7xl font-mullish font-bold text-purple-200 opacity-90">Courses</p>
                <p className="text-xl font-semibold font-mullish text-center text-lpurple opacity-60">Explore our 
                 expert-curated courses tailored to elevate your skills and knowledge in the tech industry.
                 From fundamentals to advanced topics, discover the pathway to success with us.</p>
            </div>
            </div>
           </div>
           <img src={bg} alt="img" className="w-full relative mt-[-100px] h-[300px] z-1"/>

           {/* Cards section */}
           <div className="mx-auto relative">
           <div className='search-bar mx-auto flex flex-row items-center justify-between w-10/12 my-6 rounded-xl py-2 px-8 border border-slate-400 shadow-md shadow-purple-200'>
                <input type="text" name='search' id='search' placeholder='Search for Courses' style={{width:"70%"}} className="py-3 px-9 border-purple-200"></input>
                <button type='button' className='search-btn px-9 py-3 bg-darkestpurple rounded-lg hover:bg-sunny transition-all duration-200'><p className="text-white opacity-90 font-semibold font-mullish text-xl">SEARCH</p></button>
            </div>

            <div className='flex flex-col gap-y-[45px] mt-[55px]'>
              {courseData.map(function(obj) {
                return <CourseCard key={obj.id} id={obj.id} name={obj.name} description={obj.description} time={obj.time} src={obj.imgURL}/>
              })}
            </div>
            <img src={img} alt="img" className="absolute top-0 left-0 w-[160px] h-[220px]"/>
            <img src={img} alt="img" className="absolute top-[340px] rotate-180 right-0 w-[160px] h-[220px]"/>
           </div>

       </div>
    );
}

export default Course;