
import axios  from "axios";
import { URL, config} from "../../../config/constants";
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
            console.log(data.data, "admin login response data");
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
