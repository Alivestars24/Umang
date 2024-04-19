import React from "react";
import img1 from '../assets/resourcespage.png'
import bg from '../assets/eventheader.png'
import blogs from '../blogs';
import { BsPersonCircle } from "react-icons/bs";
import img3 from '../assets/resimg1.jpeg';
import './resources.css';

const BlogCard=(props)=>{
    const {title,description,author,date,url}=props;
   return(
    <div className="shadow-lg shadow-purple-200 card-div py-4 px-6">
       <img src={img3} alt="img" className="w-[680px] h-[290px]"/>
       <div className="flex flex-col justify-between gap-y-2">
        <p className="text-darkestpurple font-mullish text-lg font-bold opacity-95">{title}</p>
        <p className="text-darkestpurple font-mullish font-semibold opacity-60">{description}</p>
        <div className="flex flex-row gap-x-1 items-center ">
            <BsPersonCircle className="icon-res"/>
            <p className="text-darkestpurple font-mullish font-semibold opacity-80">{author}</p>
            <div className="bg-darkestpurple w-2 h-2 rounded-full"></div>
            <p className="text-darkestpurple font-mullish font-semibold opacity-80">{date}</p>
        </div>
        <a href={url} className="text-blue-500 underline mt-[-7px] text-lg font-mullish">Read more</a>
       </div>
    </div>
   )
}

const Resources=() =>{
    return(
       <div className="mx-auto relative">
           <div className=" bg-darkestpurple">
            <div className="flex flex-row gap-x-3 items-center w-9/12  mx-auto justify-between">
            <div className="flex flex-col gap-y-2 items-center z-10 ">
                <p className="text-8xl font-mullish font-bold text-purple-200 opacity-90">Resources</p>
                <p className="text-xl font-semibold font-mullish text-center text-lpurple opacity-70">Explore a curated selection of enlightening blogs and articles tailored to enrich your learning 
                  journey in the tech industry. Delve into insightful perspectives, practical tips, and cutting-edge
                  trends shared by industry experts and thought leaders. Stay informed, inspired, and empowered as 
                   you navigate your path towards success.</p>
            </div>
            <img src={img1} alt="img" className="z-10 w-[650px] h-[580px]"/>
            </div>
           </div>
           <img src={bg} alt="img" className="w-full relative mt-[-200px] h-[300px] z-1"/>

           <div className="mt-[80px]">
           <div className='py-8 px-8 w-9/12 mx-auto grid grid-cols-3 gap-y-[95px] gap-x-[65px] relative'>
                    {
                        blogs.map(function(blogs) {
                            return <BlogCard id={blogs.id} url={blogs.url} title ={blogs.title} description={blogs.description} author={blogs.author} date={blogs.date} />
                        })
                    }   
            </div>
           </div>
       </div>
    );
}

export default Resources;