import axios from "axios"
import { BASE_URL } from "../../../../utils/constats"

export const addBrand = async (name: string) => {
  try {
    await axios.post(`${BASE_URL}/api/brand`,
      { name }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
  } catch (error) {
    console.log(error)
  }
}