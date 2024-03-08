import axios from 'axios';

const URL = "http://localhost:7000";

export const authenticatSignup = async (data) =>{
    try {
     return  await  axios.post(`${process.env.REACT_APP_BASE_URL}/signup`,data)
    } catch (error) {
        console.log("Error while calling signup api ", error);
    }
}

export const authenticateLogin = async (data) => {
    try {
     return  await  axios.post(`${process.env.REACT_APP_BASE_URL}/login`,data);
    } catch (error) {
        console.log("Error while calling login api ", error);
        return error.response;
    }
}


export const payUsingPaytm = async(data) => {
    try{
       let response = await axios.post(`${process.env.REACT_APP_BASE_URL}/payment`, data);
       return response.data;
    } catch(error){
        console.log("Error while calling payment api", error);
    }
}