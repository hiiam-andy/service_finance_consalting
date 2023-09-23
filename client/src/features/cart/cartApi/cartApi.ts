import axios from "axios"
import { BASE_URL } from "../../../utils/constats"

export const addToCart = async (userId: number, productId: number, quantity: number) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/cart`, {
      userId, productId, quantity
    })
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}