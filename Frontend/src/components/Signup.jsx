import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function Signup() {
   const navigate=useNavigate();
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'
  const openLoginModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.showModal();
  };
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit =async(data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
         
          toast.success("Signup Successfull");
         navigate(from, { replace: true });

        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
        if(err.response){
          console.log(err);
       toast.error("This is an error!")
        }
        
      })
    };

  return (
    <div className='flex h-screen items-center justify-center'>
      {/* Card Container */}
      <form  onSubmit={handleSubmit(onSubmit)}
      className="border-[2px] w-[600px] shadow-md p-5 rounded-md relative w-fit">
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">SignUp</h3>

        {/* Name */}
        <div className="mt-4 space-y-2">
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            className="w-80 px-3 py-1 border rounded-md outline-none"
                          {...register("fullname", { required: "name is required" })}
          />
          {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
        </div>

        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
                          {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
        </div>

        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
                          {...register("password", { required: "password is required" })}
          />
          {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
        </div>

        {/* Button & Login Link */}
        <div className="flex justify-around mt-4 items-center">
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200"
          >
            Signup
          </button>
          <span>
            Already registered?{" "}
            <button
              type="button"
              className="underline text-blue-500 cursor-pointer"
              onClick={openLoginModal}
            >
              Login
            </button>
          </span>
        </div>
      </form>

      {/* This mounts the actual Login dialog at root level */}
      <Login />
    </div>
  );
}

export default Signup;
