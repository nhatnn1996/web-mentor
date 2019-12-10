import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const Api = () => {
  const JWToken = localStorage.getItem("jwt");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER,
    timeout: 10000,
    headers: {
      Accept: "application/json",
      Authorization: JWToken
    }
  });
  return instance;
};

export default Api;
