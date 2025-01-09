//  export const createAxiosConfig = (isFileUpload = false) => ({
//     headers: {
//         "Content-Type": isFileUpload ? "multipart/form-data" : "application/json",
//     },
//     withCredentials: true,
// });




export const URL="https://game-gate-api.onrender.com";

export const config ={
    headers :{
        "Content-Type": "application/json",
    },
    withCredentials:false
    
}