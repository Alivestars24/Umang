import React from "react";
import img1 from '../assets/herosectionimg.png'
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate=useNavigate();

    function getstartedHandler(){
         navigate("/login")
    }
    return(
        <div className="w-full bg-darkestpurple mt-0 relative py-3">
            <div className="flex flex-row items-center justify-between max-w-[1480px] mx-auto">
                <div className="relative flex flex-col justify-between py-1 px-5 mt-0 gap-y-4 max-w-[850px]">
                    <p className="text-8xl font-bold font-cher text-sunny ">Empowering Women in Tech</p>
                    <p className="text-[25px] font-mw text-lpurple opacity-90">
                    Dare to dream, Dare to disrupt, Dare to make a difference. 
                    </p>
                    <p className="text-2xl py-2 font-mw text-purple-300 mt-3">
                    At the heart of our mission lies a simple yet profound goal: to embolden women in tech, amplify their voices, 
                    and cultivate environments where brilliance transcends gender.
                    Join us as we lead the charge towards a future where success hinges solely on talent, 
                    innovation, and unwavering determination.
                    </p>

                    <button onClick={getstartedHandler} className="border w-5/12 border-slate-500 bg-lpurple rounded-lg relative hover:bg-yellow-300 cursor-pointer
                    py-3 px-6">
                        <p className="font-bold text-darkestpurple text-2xl ">Get Started</p>
                    </button>
                </div>

                <div>
                    <img src={img1} alt="home_page_img" className="w-[2500px] h-[700px] relative"/>
                </div>
            </div>
            
        </div>
    )
}

export default Header;