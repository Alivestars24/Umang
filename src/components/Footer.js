import React from "react";
import { Link } from "react-router-dom";
import {AiFillFacebook,AiOutlineGithub} from 'react-icons/ai'
import {BsTwitter,BsYoutube} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'

const Footer=() =>{
    return(
       <div className="mt-[105px]  bg-darkestpurple">
        <div  className="max-w-[1400px] flex flex-row items-center mx-auto px-11 py-4 justify-between gap-x-2">
            <div className="flex flex-col justify-between gap-y-4">
                <Link to='/' className="text-4xl font-bold text-lpurple font-cher">UMANG</Link>
                <div className="flex flex-row items-center justify-between gap-x-2">
                    <Link to='/' className="font-mullish text-xl text-lpurple ">Home</Link>
                    <div className="bg-lpurple w-1 h-7 "></div>
                    <Link to='/events' className="font-mullish text-xl text-lpurple ">Events</Link>
                    <div className="bg-lpurple w-1 h-7 "></div>
                    <Link to='/oppurtunities' className="font-mullish text-xl text-lpurple ">Oppurtunities</Link>
                    <div className="bg-lpurple w-1 h-7 "></div>
                    <Link to='/resources' className="font-mullish text-xl text-lpurple ">Resources</Link>
                    <div className="bg-lpurple w-1 h-7 "></div>
                    <Link to='/courses' className="font-mullish text-xl text-lpurple ">Courses</Link>
                </div>
                <p className="fnt-mullish text-white opacity-75">Umang © 2024</p>
            </div>


            <div className="max-w-[250px] ">
                 <p className="text-white font-mullish opacity-70">Indian Institute of Information Technology ,Pune, Ambegaon Budruk,Pune ,Maharashtra  <br/> +1 555-555-555</p>
            </div>

            <div className="max-w-[320px] mt-[4px]">
                <p className="text-lpurple font-mullish font-bold text-xl">About</p>
                <p className="text-white font-mullish opacity-70">On a mission to empower women and girls to establish a succesful career in tech</p>
                <div className="footer-icons">
					<a href="https://www.facebook.com/"><AiFillFacebook /></a>
					<a href="https://twitter.com/"><BsTwitter /></a>
					<a href="https://www.instagram.com/"><FiInstagram /></a>
					<a href="https://github.com/"><AiOutlineGithub /></a>
					<a href="https://www.youtube.com/"><BsYoutube /></a>
				</div>

            </div>
        </div>
       </div>
    );
}

export default Footer;