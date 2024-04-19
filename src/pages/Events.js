import React from "react";
import './events.css';
import img1 from '../assets/event1.png';
import bg from '../assets/eventheader.png'
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import bg2 from '../assets/triangle.png';
import { HiLocationMarker } from "react-icons/hi";
import bg3 from '../assets/prplewaves.png';
import sparkle from '../assets/Sparkle.png'

const Events=() =>{
    return(
       <div className="mx-auto relative">
           <div>
              <img src={bg} alt="img" className="w-full h-[400px] z-[-10] absolute top-[-65px]"/>
           </div>

          <div className="flex flex-row items-center max-w-[1524px] mx-auto justify-between py-1 px-7 mt-7">
            <div className="flex flex-col items-center gap-y-1 mx-auto">
                <h1 className="font-extrabold font-gg text-lpurple text-7xl">Events</h1>
                <div className="h-1 w-10 bg-sunny "></div>
                <p className="text-zinc-100 opacity-90 font-mullish font-bold text-xl w-5/6 text-center py-3 px-7">
                Discover a diverse range of virtual events, talks, and seminars led by industry pioneers
                {/* . Gain valuable insights, expand your network, and stay updated on the latest tech trends.  */}
                </p>
            </div>
          </div>

          {/*Cards section */}

          <div className="flex flex-col gap-y-[50px] mt-[150px] relative ">
          <img src={bg2} alt="img" className="w-[180px] h-[180px] z-[-2] absolute left-[420px] top-[250px] rotate-180"/>
          <img src={bg2} alt="img" className="w-[180px] h-[240px] z-[-2] absolute right-[20px] opacity-95 top-[60px] "/>
          <img src={bg2} alt="img" className="w-[180px] h-[180px] z-[-2] absolute left-[420px] top-[1170px] rotate-180"/>
          <img src={bg2} alt="img" className="w-[180px] h-[240px] z-[-2] absolute right-[18px] opacity-95 top-[1030px] "/>
          <img src={bg3} alt="img" className="w-[960px] h-[450px] z-[-2] absolute opacity-30 left-[1255px] top-[550px] "/>
          <img src={sparkle} alt="img" className="w-[160px] h-[120px] z-1 absolute right-[100px] top-[570px]"/>
          <img src={bg3} alt="img" className="w-[960px] h-[450px] z-[-2] absolute opacity-30 left-[1255px] top-[1490px] "/>
          <img src={sparkle} alt="img" className="w-[160px] h-[120px] z-1 absolute right-[100px] top-[1530px]"/>
            <div className="flex flex-row items-center gap-x-2 bg-white w-7/12  relative ml-[600px] hover:scale-105 transition-all duration-200">
                <div className="flex flex-row gap-x-1  bg-darkestpurple card1 py-5 px-5 shadow-lg shadow-dpurple ">
                    <img src={img1} alt="Eventcard" className=""/>
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <h3 className="text-white font-bold font-cher text-[40px]">Women in Tech Summit 2024</h3>
                        <div className="flex flex-row justify-between items-center gap-x-7"> 
                            <div className="flex flex-row items-center gap-x-1">
                                <SlCalender className="bg-white opacity-75 "/>
                                <p className="text-lg text-white opacity-80"> May 15-17, 2024</p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-x-1">
                                <HiLocationMarker className="icon opacity-75 h-[35px] "/>
                                <p className="text-lg text-white opacity-80">Virtual Event</p>
                            </div>
                        </div>
                        <p className="text-white text-center opacity-60 font-mullish">Join us for the Women in Tech Summit 2024, a groundbreaking virtual event dedicated to empowering women in the technology sector. 
                           Over the course of three inspiring days, attendees will have the opportunity to participate in a series of keynote speeches,
                           panel discussions, workshops, and networking sessions designed to foster professional growth, celebrate achievements, and 
                           address challenges faced by women in tech.</p>
                        <button className="mt-[9px] bg-lpurple border border-slate-600 px-7 py-[7px] rounded-lg relative cursor-pointer hover:bg-sunny">
                        <p className="text-darkestpurple font-bold text-2xl">Know More</p></button>
                    </div>
                </div>
                {/* <div className="bg-dpurple shadow-md shadow-pinkpurple h-[25px] w-[155px] rounded-full mx-7 "></div> */}
                <div className="bg-darkestpurple shadow-md shadow-pinkpurple ml-[15px] h-[436px] w-[30px] rounded-xl"></div>
            </div>

            <div className="flex flex-row bg-white items-center gap-x-2 w-7/12 ml-[150px] hover:scale-105 transition-all duration-200">
            <div className="bg-darkestpurple shadow-md shadow-pinkpurple ml-[15px] h-[436px] w-[30px] rounded-xl"></div>
                <div className="flex flex-row gap-x-1 bg-darkestpurple card1 py-5 px-5 shadow-lg shadow-dpurple ">
                    <img src={img1} alt="Eventcard" className=""/>
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <h3 className="text-white font-bold font-cher text-[40px]">Women in Tech Summit 2024</h3>
                        <div className="flex flex-row justify-between items-center gap-x-7"> 
                            <div className="flex flex-row items-center gap-x-1">
                                <SlCalender className="bg-white opacity-75 "/>
                                <p className="text-lg text-white opacity-80"> May 15-17, 2024</p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-x-1">
                                 <IoLocationSharp className="icon opacity-75 h-[35px] "/>
                                <p className="text-lg text-white opacity-80">Virtual Event</p>
                            </div>
                        </div>
                        <p className="text-white text-center opacity-60 font-mullish">Join us for the Women in Tech Summit 2024, a groundbreaking virtual event dedicated to empowering women in the technology sector. 
                           Over the course of three inspiring days, attendees will have the opportunity to participate in a series of keynote speeches,
                           panel discussions, workshops, and networking sessions designed to foster professional growth, celebrate achievements, and 
                           address challenges faced by women in tech.</p>
                        <button className="mt-[9px] bg-lpurple border border-slate-600 px-7 py-[7px] rounded-lg relative cursor-pointer hover:bg-sunny">
                        <p className="text-darkestpurple font-bold text-2xl">Know More</p></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-white items-center gap-x-2 w-7/12 ml-[600px] hover:scale-105 transition-all duration-200">
                <div className="flex flex-row gap-x-1 bg-darkestpurple card1 py-5 px-5 shadow-lg shadow-dpurple ">
                    <img src={img1} alt="Eventcard" className=""/>
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <h3 className="text-white font-bold font-cher text-[40px]">Women in Tech Summit 2024</h3>
                        <div className="flex flex-row justify-between items-center gap-x-7"> 
                            <div className="flex flex-row items-center gap-x-1">
                                <SlCalender className="bg-white opacity-75 "/>
                                <p className="text-lg text-white opacity-80"> May 15-17, 2024</p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-x-1">
                                 <IoLocationSharp className="icon opacity-75 h-[35px] "/>
                                <p className="text-lg text-white opacity-80">Virtual Event</p>
                            </div>
                        </div>
                        <p className="text-white text-center opacity-60 font-mullish">Join us for the Women in Tech Summit 2024, a groundbreaking virtual event dedicated to empowering women in the technology sector. 
                           Over the course of three inspiring days, attendees will have the opportunity to participate in a series of keynote speeches,
                           panel discussions, workshops, and networking sessions designed to foster professional growth, celebrate achievements, and 
                           address challenges faced by women in tech.</p>
                        <button className="mt-[9px] bg-lpurple border border-slate-600 px-7 py-[7px] rounded-lg relative cursor-pointer hover:bg-sunny">
                        <p className="text-darkestpurple font-bold text-2xl">Know More</p></button>
                    </div>
                </div>
                {/* <div className="bg-dpurple shadow-md shadow-pinkpurple h-[25px] w-[155px] rounded-full mx-7 "></div> */}
                <div className="bg-darkestpurple shadow-md shadow-pinkpurple ml-[15px] h-[436px] w-[30px] rounded-xl"></div>
            </div>

            <div className="flex flex-row bg-white items-center gap-x-2 w-7/12 ml-[150px] hover:scale-105 transition-all duration-200">
            <div className="bg-darkestpurple shadow-md shadow-pinkpurple ml-[15px] h-[436px] w-[30px] rounded-xl"></div>
                <div className="flex flex-row gap-x-1 bg-darkestpurple card1 py-5 px-5 shadow-lg shadow-dpurple ">
                    <img src={img1} alt="Eventcard" className=""/>
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <h3 className="text-white font-bold font-cher text-[40px]">Women in Tech Summit 2024</h3>
                        <div className="flex flex-row justify-between items-center gap-x-7"> 
                            <div className="flex flex-row items-center gap-x-1">
                                <SlCalender className="bg-white opacity-75 "/>
                                <p className="text-lg text-white opacity-80"> May 15-17, 2024</p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-x-1">
                                 <IoLocationSharp className="icon opacity-75 h-[35px] "/>
                                <p className="text-lg text-white opacity-80">Virtual Event</p>
                            </div>
                        </div>
                        <p className="text-white text-center opacity-60 font-mullish">Join us for the Women in Tech Summit 2024, a groundbreaking virtual event dedicated to empowering women in the technology sector. 
                           Over the course of three inspiring days, attendees will have the opportunity to participate in a series of keynote speeches,
                           panel discussions, workshops, and networking sessions designed to foster professional growth, celebrate achievements, and 
                           address challenges faced by women in tech.</p>
                        <button className="mt-[9px] bg-lpurple border border-slate-600 px-7 py-[7px] rounded-lg relative cursor-pointer hover:bg-sunny">
                        <p className="text-darkestpurple font-bold text-2xl">Know More</p></button>
                    </div>
                </div>
                {/* <div className="bg-dpurple shadow-md shadow-pinkpurple h-[25px] w-[155px] rounded-full mx-7 "></div> */}
            </div>
          </div>
       </div>
    );
}

export default Events;