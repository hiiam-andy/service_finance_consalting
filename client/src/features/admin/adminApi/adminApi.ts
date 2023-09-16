import axios from "axios"
import { BASE_URL } from "../../../utils/constats"


export const addProduct = async (formData: any) => {
  try {
    await axios.post(`${BASE_URL}/api/product`,
      formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
  } catch (error) {
    console.log(error)
  }
}