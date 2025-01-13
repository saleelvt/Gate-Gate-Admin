
import axios  from "axios";
import { URL, config} from "../../../config/constants";

import Cookies from "js-cookie";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAdminLogin } from "../../../interfaces/admin/login";


export const axiosIn = axios.create({
    baseURL: URL,
  });





  export const loginAdmin= createAsyncThunk(
    "admin/login",
    async (adminCredentials:IAdminLogin,{rejectWithValue})=>{
        try {
            console.log( "admin login and data ",adminCredentials);
         
            const {data} = await axiosIn.post(`/api/v1/admin/login`, adminCredentials,config);
            console.log(data.data.accessToken, data.data.refreshToken, "admin login response data");
            
            Cookies.set("accessToken", data.data.accessToken, {
              expires: 7, // 7 days expiration
              secure: true, // Only send cookie over HTTPS
              sameSite: "Strict", // CSRF protection
            });
      
            Cookies.set("refreshToken", data.data.refreshToken, {
              expires: 7, // Same expiry time as accessToken
              secure: true,
              sameSite: "Strict",
            });

            return data.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.response && error.response.data) {
              return rejectWithValue(error.response.data.message);
            } else {
              return rejectWithValue({ message: "Something went wrong!" });
            }
          }
    }
  )
  

  
export const adminLogout = createAsyncThunk(
  "admin/logout",
  async (__, { rejectWithValue }) => {
    try {

      axiosIn.delete(`admin/logout`, config )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "Something went wrong!" });
      }
    }
  }
);





export const userLanguageChange = createAsyncThunk(
  "admin/language change",
  async (lang:string, { rejectWithValue }) => {
    try {
         const language=lang
      return language 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "Something went wrong!" });
      }
    }
  }
);
