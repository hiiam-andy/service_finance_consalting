import axios from "axios"
import { BASE_URL } from "../../../../utils/constats"

export const addType = async (name: string) => {
  try {
    let res = await axios.post(`${BASE_URL}/type`,
      { name }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}