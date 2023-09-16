import axios from "axios"
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../../utils/constats"


export const registration = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/registration`, { email, password })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, {
      email, password
    })
    localStorage.setItem("token", res.data.token);
    return jwt_decode(res.data.token);
  } catch (error) {
    console.log(error)
  }
}

export const check = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user/auth`)
    localStorage.setItem("token", res.data.token);
    return jwt_decode(res.data.token);
  } catch (error) {
    console.log(error)
  }
}