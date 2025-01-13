//  export const createAxiosConfig = (isFileUpload = false) => ({
//     headers: {
//         "Content-Type": isFileUpload ? "multipart/form-data" : "application/json",
//     },
//     withCredentials: true,
// });
import Cookies from 'js-cookie';


export const URL="https://game-gate-api.onrender.com";

export const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cookies.get("accessToken")}`  // Retrieve the access token from the cookies
    },
    withCredentials: false // Typically used for CORS requests; set to true if needed for credentials
  };