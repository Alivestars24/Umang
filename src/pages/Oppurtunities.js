import React from "react";
import bg from '../assets/eventheader.png'
import { PiClockFill } from "react-icons/pi";
import jobs from '../jobs';
import { MdLocationOn } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { BsBookmarksFill } from "react-icons/bs";
import img from '../assets/Jobimg.jpeg';
import './oppurtunities.css';
import {toast} from 'react-hot-toast'
import bgimg1 from '../assets/triangle.png'
import bgimg2 from '../assets/Sparkle.png'
import imglg from '../assets/yelowribbon.png'

const OpportunityCard = (props) => {
    let status=false;

    const { title, Description, date, link,Location ,company } = props;
    function saveHandler(){
        if(status===false){
            toast.success('Saved Successfully');
            status=true;
        }
        else{
            toast.error('Unsaved the oppurtunity');
            status=false; 
        }
        //take into consideration saved unsaved feature functionality
    }
    return(
        <div className='flex flex-col gap-y-1 items-center justify-between py-7 px-7 rounded-3xl relative bg-purple-100 border border-purple-100 shadow-xl shadow-lpurple '>
            <img src={imglg} alt="img" className="absolute top-3 left-[-29px] w-[370px] h-[120px]"/>
            <img src={bgimg1} alt="img" className="absolute top-[-50px] left-[-350px] "/>
            <img src={bgimg1} alt="img" className="absolute bottom-[-80px] right-[-350px] rotate-180"/> 
            <div className="">
              <img src={img} alt="img" className="w-[780px] h-[370px] rounded-lg "/>
              <div className="flex flex-row items-center justify-between gap-x-3">
               <div className="mt-1">
                   <p className="text-darkestpurple font-mullish font-bold text-xl">{company}</p>
                   <h2 className="text-4xl font-bold text-darkestpurple font-mullish">{title}</h2>
               </div>
               <BsBookmarksFill className="ic w-[25px] h-[25px] cursor-pointer" onClick={saveHandler}/>
              </div>
              <div className="flex flex-row items-center justify-between gap-x-3">
                <div className="flex flex-row items-center justify-between gap-x-1">
                    <MdLocationOn className="ic "/>
                    <p className="text-darkestpurple font-mullish  font-semibold">{Location}</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-x-1">
                    <PiClockFill className="ic "/>
                    <p className="text-darkestpurple font-mullish  font-semibold">Last Date to Apply: {date}</p>
                </div>
              </div>
            </div>
            <h3 className="text-center text-darkestpurple font-mullish font-semibold opacity-80 ">{Description}</h3>
           <button className="flex border-pinkpurple border-b-4 hover:scale-105 transition-all duration-200 flex-row hover:bg-dpurple gap-x-2 items-center justify-center py-2 px-8 rounded-lg bg-darkestpurple"><FaLink className="ic1"/><a href={link} className="text-white font-cher font-bold text-lg">APPLY NOW</a></button> 
        </div>
    )
}

const Oppurtunities=() =>{
    return(
       <div className="mx-auto relative">
           <div>
              <img src={bg} alt="img" className="w-full h-[400px] z-[-10] absolute top-[-65px]"/>
           </div>

          <div className="flex flex-row items-center max-w-[1524px] mx-auto justify-between py-1 px-7 mt-7">
            <div className="flex flex-col items-center gap-y-1 mx-auto">
                <h1 className="font-extrabold font-gg text-lpurple text-7xl">Oppurtunities</h1>
                <div className="h-1 w-10 bg-sunny "></div>
                <p className="text-zinc-100 opacity-90 font-mullish font-bold text-xl w-5/6 text-center py-3 px-7">
                Discover handpicked career opportunities in the tech sector to elevate your professional journey.
                </p>
            </div>
          </div>

          {/* card Section */}
          <div className="mt-[150px]">
            <div className='py-8 px-8 w-8/12 mx-auto flex flex-col gap-y-[95px] relative'>
                    {
                        jobs.map(function(jobs) {
                            return <OpportunityCard company={jobs.company} title ={jobs.title} Description={jobs.Description} Location={jobs.Location} date={jobs.date} link ={jobs.link}/>
                        })
                    }   
            </div>
            <img src={bgimg2} alt="img" className="absolute  w-[140px] h-[120px] top-[180px] z-2 right-[60px] "/> 
          </div>
          

       </div>
    );
}

export default Oppurtunities;