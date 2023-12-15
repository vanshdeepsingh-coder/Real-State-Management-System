import axios from "axios";
export var axiosInstance;

async function axiosConfig(){
  axiosInstance = await axios.create({
    baseURL: process.env.API_BASE_URL,
  });
}

export default axiosInstance;
