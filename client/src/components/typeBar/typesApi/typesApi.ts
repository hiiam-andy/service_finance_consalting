import axios from "axios"
import { BASE_URL } from "../../../utils/constats"


export const addType = async (name: string) => {
  try {
    await axios.post(`${BASE_URL}/api/type`,
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

// export const deleteType = async (name: string) => {
//   try {
//     await axios.delete(`${BASE_URL}/api/type`,
//       { name:{name},
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       }
//     )
//   } catch (error) {
//     console.log(error)
//   }
// }