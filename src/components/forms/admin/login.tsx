/* eslint-disable @typescript-eslint/no-explicit-any */


import React, { useState } from "react";
import { useFormik } from "formik";
import { ValidationLogin } from "../../../validation/admin/adminLogin";
import { IAdminLogin } from "../../../interfaces/admin/login";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../reduxKit/store";
import { loginAdmin } from "../../../reduxKit/actions/auth/authAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";



export const AdminLogin = React.memo(() => {

  const dispatch=useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {loading}=useSelector((state:RootState)=>state.auth)
  const initialValues: IAdminLogin = {
    email: "",
    password: "",
  };






  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik<IAdminLogin>({
    initialValues,
    validationSchema: ValidationLogin,
    onSubmit: async (values) => {
      try {
        console.log(values, "before going to salon home page");
        await dispatch(loginAdmin(values)).unwrap()
        navigate("/adminHomepage")
      }  catch (error:any) {
        console.error("Login failed:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message,
          timer: 3000,
          toast: true,
          showConfirmButton: false,
          timerProgressBar: true,
          background: '#fff',
          color: '#721c24', 
          iconColor: '#f44336', 
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer); // Pause timer on hover
            toast.addEventListener('mouseleave', Swal.resumeTimer); // Resume timer on mouse leave
          },
          showClass: {
            popup: 'animate__animated animate__fadeInDown' // Animation when the toast appears
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp' // Animation when the toast disappears
          }
        });
      }
    },
  });

  return (
    <div
      className="flex items-center px-6  justify-center min-h-screen relative overflow-hidden"
      style={{
        // backgroundImage: url(${BgImg}),
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse  blur-md"></div>
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0  adminlogin-background  " >
        <div className="background-one   relative inset-0 flex justify-center items-start pt-[60px]">
          {/* <img src={BgImg} alt="" className="w-[110px]" /> */}
        </div>
        <div className="background-two"></div>
      </div>

      {/* Form Container */}
      <div
        className="relative z-10 flex flex-col  items-center bg-white px-[40px] py-[65px] w-full max-w-md  admin-login-box  "
        style={{
        //  backgroundImage:url(${BgImg})
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center   animate-bounce" style={{fontFamily:'Unbounded' , color:'#24288E'}}>
          Admin Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="w-full">
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[17px]   text-gray-600  mb-[2px]"
               
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg   text-gray-800 focus:ring-2 focus:ring-[#723077] focus:outline-none transition"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-400 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="mb-5 relative">
            <label  
              htmlFor="password"
              className="block text-[17px]   text-gray-600  mb-[2px]"
            >
              Password
            </label>
            <input
              id="password"
              
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg   text-gray-800 focus:ring-2 focus:ring-[#723077] focus:outline-none transition"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223a11.055 11.055 0 00-1.66 3.656C2.453 12.11 4.825 16.5 12 16.5c2.245 0 4.09-.5 5.5-1.217M21 21l-1.682-1.682M3.98 8.223L21 21M9.878 9.878a3 3 0 014.244 4.244"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-8 mt-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.432 5 12 5c3.87 0 7.07 2.43 8.542 5.458A10.97 10.97 0 0112 19.5a10.97 10.97 0 01-9.542-7.5z"
                  />
                </svg>
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-400 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
            style={{backgroundColor:'#24288E', fontFamily:'Unbounded' }}
              type="submit"
              className="w-full px-6 py-3 rounded-[1000px]  
 text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transform transition"
            >
              <span className="relative">{loading ? "Loading..." : "Login"}</span>
            </button>
          </div>
        </form>
      </div>
     </div>
   ) ;
});

