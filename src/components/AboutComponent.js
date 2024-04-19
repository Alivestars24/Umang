import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import img2 from "../assets/about.png"
import './About.css';
import sparkle from '../assets/Sparkle.png';
import waves from '../assets/prplewaves.png'

const AboutComponent = ()=>{
    //border border-slate-300  bg-purple-100 shadow-lg shadow-darkestpurple rounded-xl
    return(
        <div className="relative ">
           <div className="mt-20 mb-20 flex flex-row items-center justify-between gap-x-2 
        max-w-[1240px] px-6  py-4 mx-auto z-1 bg-zinc-50 ">
           <div className="flex flex-col gap-y-3 justify-between items-center ">
             <img src={img2} alt="Girl_with_microphone" className="w-[520px] h-[470px] relative"/>
             <p className="text-4xl font-bold text-darkestpurple px-1 py-1 text-center">Embark on Your Career Journey Now!</p>
           </div>
           <div className="flex flex-col justify-between gap-y-1 max-w-[680px] mt-1">
             <div className="flex flex-row gap-x-1">
                <FiCheckCircle className="w-[45px] h-[45px] about px-1 py-1"/>
                <p className="font-bold font-mullish text-2xl text-darkestpurple px-1 py-1">We equip you with industry relevant skills to jumpstart your career in Technology.</p>
             </div>

             <div className="flex flex-row gap-x-1">
                <FiCheckCircle className="w-[54px] h-[54px] about px-1 py-1"/>
                <p className="font-bold font-mullish text-2xl text-darkestpurple px-1 py-1">Learn at your own pace and time with our specially curated courses list, mentorships and resources.</p>
             </div>

             <div className="flex flex-row gap-x-1 items-start ">
                <FiCheckCircle className="w-[69px] h-[69px] about px-1"/>
                <p className="font-bold font-mullish text-2xl text-darkestpurple px-1 py-1">Whether you are just starting out, 
                restarting after a long break, or making a transition, we support women at all stages of their career.</p>
             </div>

             <div className="flex flex-row gap-x-1">
                <FiCheckCircle className="w-[62px] h-[62px] about px-1 py-1"/>
                <p className="font-bold font-mullish text-2xl text-darkestpurple px-1 py-1">Stay informed about panel discussions, 
                keynote presentations, hackathons, and career fairs relevant to your interests.</p>
             </div>

             <div className="flex flex-row gap-x-1">
                <FiCheckCircle className="w-[55px] h-[55px] about px-1 py-1"/>
                <p className="font-bold font-mullish text-2xl text-darkestpurple px-1 py-1">Discover career opportunities at leading tech companies, 
                startups, non-profits, and research institutions.</p>
             </div>
           </div>
        </div>
          <div >
            <img src={sparkle} alt="sparkle" className="w-[150px] h-[110px] absolute top-[16px] right-[189px] z-10"/>
             {/* <img src={sparkle} alt="sparkle" className="w-[150px] h-[110px] absolute bottom-[16px] left-[187px] z-10"/> */}
            </div>
           <div>
               <img src={waves} alt="waves" className="w-full h-[480px] -z-10 absolute bottom-[80px]"/>
           </div>
        </div>
        
    )
}

export default AboutComponent;