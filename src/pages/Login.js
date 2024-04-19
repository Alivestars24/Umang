import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import girl from '../assets/cardssection.png'

const Login=() =>{
    const navigate=useNavigate();

    const [loggedIn,setIsLoggedin]=useState(false);

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const [showPassword, setPassword] = useState(false);
  
    const changeHandler = (event) => {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    };
  
    const submitHandler=(event)=>{
      event.preventDefault()
      setIsLoggedin(true);
      toast.success("Logged In")
      navigate("/");
      const loginData={
        ...formData
      }
      console.log(loginData)
    }

    return(
    <div className='mx-auto relative bg-darkestpurple py-12 mb-[-105px]'>
        <div className="flex flex-col  items-center justify-center py-10 px-6  w-5/12 mx-auto ">
            <div className="flex flex-col gap-y-1 items-center">
                <p className="text-purple-50 text-5xl font-mullish font-bold opacity-95">Welcome Back!</p>
                <p className="text-lpurple text-[17px] font-mullish font-semibold opacity-60">Unlocking opportunities and amplifying voices in the world of technology for women.</p>
            </div>
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6 select-none">
           <label className="w-full">
              <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
                   Email Address <sup className="text-lpurple">*</sup>
              </p>
           <input
              type="email"
              required
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter Email id"
              name="email"
              className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1"
            />
           </label>

           <label className="w-full relative">
            <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
              Password <sup className="text-lpurple">*</sup>
            </p>
            <input
             type={showPassword ? "text" : "password"}
             required
             value={formData.password}
             onChange={changeHandler}
             placeholder="Enter Password"
             name="password"
             className="bg-purple-100 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
             <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setPassword((prev) => !prev)}>
             {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#4d0e5a" /> : <AiOutlineEye fontSize={24} fill="#4d0e5a" />}
            </span>

            <Link to="#">
            <p className="text-xs mt-1 text-blue-200 max-w-max ml-auto">Forgot Password?</p>
            </Link>
            </label>

            <button className="bg-pinkpurple rounded-lg font-medium text-richblack-900 px-3 py-3 mt-4">Sign In</button>
        </form>
        <div className="flex flex-row gap-x-2 items-center mt-3 ">
            <p className="text-lpurple text-lg font-mullish font-bold ">Don't have a account already?</p>
            <Link to='/register'><p className="text-purple-50 text-lg font-mullish font-bold underline ">Sign Up</p></Link>
        </div>
        </div>
        <img src={girl} alt="girl" className="absolute w-[810px] h-[670px] top-[10px] right-[-225px]"/>
    </div>

    );
}

export default Login;