import React from "react";
import { useNavigate } from "react-router-dom";
import cimg from '../assets/courses.png'
import eimf from '../assets/events.png'
import rimg from '../assets/Resources.png'
import oimg from '../assets/oppurtunities.png'

const Services=() =>{
    const navigate=useNavigate();
    return(
       <div className="bg-darkestpurple w-full relative">
           <div className="flex flex-col items-center gap-y-2">
              <h1 className="font-bold text-7xl text-sunny pt-6 pb-2 px-1 mt-5  ">Our Services</h1>
              <div className="w-1/12 mx-auto bg-sunny h-1 "></div>
              <p className="text-2xl  mt-3 font-mullish font-bold opacity-60 text-white text-center max-w-[1380px] py-2 px-1">
              At the heart of our endeavor lies a profound commitment: to champion women and girls as they carve out 
              successful paths in the realm of technology. In our nation, these individuals often encounter 
              barriers to quality education and opportunities, despite their remarkable potential. In the ever-evolving 
              landscape of technology, women remain a significantly underrepresented group, even as strides are made 
              towards greater inclusivity. Our mission is clear: to serve as a bridge between industry demand and aspiring 
              female talent, offering invaluable support and guidance as they embark on their journey towards a thriving career.
              </p>
              <div className="flex flex-row mb-[45px] mt-7 gap-x-[45px] max-w-[1480px] justify-between  py-5 px-6 relative">
                <div onClick={() => {navigate("/courses")}} className="flex flex-col relative cursor-pointer py-3 px-4 
                border servicecard bg-purple-200 rounded-md border-slate-400 shadow-xl shadow-fuchsia-300">
                    <img src={cimg} alt="courses" className="w-[280px] h-[230px]"/>
                    <h2 className="text-5xl font-cher font-bold text-darkestpurple mx-auto px-3">Courses</h2>
                </div>

                <div onClick={() => {navigate("/events")}} className="flex flex-col relative cursor-pointer py-3 px-4 
                border servicecard bg-purple-200 rounded-md border-slate-400 shadow-xl shadow-fuchsia-300">
                    <img src={eimf} alt="courses" className="w-[270px] h-[220px] mb-[11px]"/>
                    <h2 className="text-5xl font-cher font-bold text-darkestpurple mx-auto px-3">Events</h2>
                </div>

                <div onClick={() => {navigate("/resources")}} className="flex flex-col relative cursor-pointer py-3 px-4 
                border servicecard bg-purple-200 rounded-md border-slate-400 shadow-xl shadow-fuchsia-300">
                    <img src={rimg} alt="courses" className="w-[280px] h-[230px]"/>
                    <h2 className="text-5xl font-cher font-bold text-darkestpurple mx-auto px-3">Resources</h2>
                </div>

                <div onClick={() => {navigate("/oppurtunity")}} className="flex flex-col relative cursor-pointer py-3 px-4 
                border servicecard bg-purple-200 rounded-md border-slate-400 shadow-xl shadow-fuchsia-300">
                    <img src={oimg} alt="courses" className="w-[280px] h-[230px]"/>
                    <h2 className="text-5xl font-cher font-bold text-darkestpurple mx-auto px-3">Opportunity</h2>
                </div>

              </div>
           </div>
       </div>
    );
}

export default Services;