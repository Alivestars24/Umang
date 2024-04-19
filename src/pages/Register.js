import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Register=() =>{
    const [loggedIn,setIsLoggedin]=useState(false);
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    });  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const changeHandler = (event) => {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    };
  
    const submitHandler=(event)=>{
      event.preventDefault()
      if(formData.password !== formData.confirmpassword){
        toast.error("Password do not match")
        return;
      }
        setIsLoggedin(true)
        toast.success("Account Created");        
        console.log(formData)
        navigate("/");  
    }
    return(
        <div className='mx-auto relative bg-darkestpurple py-12 mb-[-105px] select-none'>
            <div className="flex flex-col  items-center justify-center py-10 px-6  w-5/12 mx-auto ">
            <div className="flex flex-col gap-y-1 items-center">
                <p className="text-purple-50 text-5xl font-mullish font-bold opacity-95">Welcome to the community!</p>
                <p className="text-lpurple text-[17px] font-mullish font-semibold opacity-60">Unlocking opportunities and amplifying voices in the world of technology for women.</p>
            </div>

            <form  onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6 select-none">
          {/* first and last name */}
  
          <div className="flex gap-x-4 mt-4">
            <label className="w-full">
              <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
                First Name <sup className="text-lpurple">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstName}
                className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1 mb-richblack-5"
              />
            </label>
  
            <label className="w-full">
              <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
                Last Name <sup className="text-lpurple">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1 mb-richblack-5"
              />
            </label>
          </div>
  
          {/* email address  */}
          <label className="w-full">
            <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem] mt-4">
              Email Address <sup className="text-lpurple">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1 mb-richblack-5"
            />
          </label>
  
          {/* password  */}
          <div className="flex gap-x-4 mt-4">
            <label className="w-full relative">
              <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
                Create Password<sup className="text-lpurple">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1 mb-richblack-5"
              />
              <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
              </span>
            </label>
  
            <label className="w-full relative">
              <p className="text-[0.875rem] text-purple-50 mb-1 leading-[1.37rem]">
                Confirm Password<sup className="text-lpurple">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                className="bg-purple-100 rounded-[0.5rem] text-darkestpurple w-full p-[12px] mb-1 mb-richblack-5"
              />
              <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
              </span>
            </label>
          </div>
  
          <button className="w-full bg-dpurple rounded-lg font-medium text-xl text-purple-50 px-3 py-2 mt-6">
            Create Account
          </button>
        </form>
            </div>
      </div>
    );
}

export default Register;