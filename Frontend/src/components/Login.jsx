import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
function Login() {
  const[authUser,setAuthUser]=useAuth()
  console.log(authUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
   const userInfo={
        
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:4001/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Loggedin Successfully")
           document.getElementById("my_modal_3").close();
          setTimeout(()=>{
          
          
           window.location.reload();
           localStorage.setItem("Users",JSON.stringify(res.data.user));
          },2000)
          
        }
        
      }).catch((err)=>{
        if(err.response){
          console.log(err);
     toast.error("This is an error!")
     setTimeout(()=>{},2000);
        }
        
      })
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Button and Link */}
          <div className="flex justify-around mt-4 items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200"
            >
              Login
            </button>
            <span>
              Not registered?{' '}
              <Link
                to="/signup"
                className="underline text-blue-500"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                SignUp
              </Link>
            </span>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
