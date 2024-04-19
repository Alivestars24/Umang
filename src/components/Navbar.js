import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar=() =>{
    //content to be added here also using useContext
    const [user,setUser]=useState(true);
    const navigate = useNavigate();

    function logoutHandler(){
        //content to be added after linking database
        setUser(false);
        toast.success('Logged out successfully');
        navigate("/login")
    }

    return(
       <div>
           <nav class="bg-darkestpurple">
            <div class="relative flex w-[1340px] mx-auto items-center justify-between">
                <div class="cursor-pointer pt-6 pb-5 pr-7">
                    {/*actual logo is to be added */}
                    <Link to='/'><p id="sec" class="font-ave text-white font-bold text-4xl ">Umang</p></Link>
                </div>
                
                <ul class="flex flex-row items-center space-x-8 ">
                    
                    <Link to='/'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-100 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">Home</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>

                    <Link to='/events'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-100 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">Events</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>

                    <Link to='/oppurtunity'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-100 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">Oppurtunities</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>

                    <Link to='/resources'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-100 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">Resources</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>

                    <Link to='/courses'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-100 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">Courses</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>

                    {/* { user &&
                    <Link to='/mycourses'>
                       <li class="text-white font-mullish py-7  text-center hover:text-lpurple cursor-pointer transition-all 
                          duration-200 relative group text-xl hidden lg:block">
                        <div class="absolute top-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer transition ease-in-out delay-150 hover:translate-x-1"></div>
                        <p className="px-[15px]">My Courses</p>
                        <div class="absolute bottom-0 w-full h-1 hidden bg-pinkpurple group-hover:block group-hover:cursor-pointer"></div>
                       </li>
                    </Link>
                    }  */}

                    { user && 
                     <div>
                        <button onClick={logoutHandler} className="bg-lpurple border border-slate-600 px-6 py-3 rounded-lg relative cursor-pointer hover:bg-sunny">
                            <p className="text-darkestpurple font-bold text-2xl">Logout</p>
                        </button>
                     </div>
                    }
                    { !user && 
                     <div>
                        <button onClick={()=>{navigate('/login')}} className="bg-lpurple border border-slate-600 px-6 py-3 rounded-lg relative cursor-pointer hover:bg-sunny">
                            <p className="text-darkestpurple font-bold text-2xl">Log In</p>
                        </button>
                     </div>
                    }
                    
                </ul>
            </div>
         </nav>
       </div>
    );
}

export default Navbar;