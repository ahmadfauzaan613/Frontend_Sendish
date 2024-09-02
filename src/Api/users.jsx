import axios from 'axios'

const portBackend = process.env.REACT_APP_BACKEND_URL

export const GetAllUser = async (search, page, size, sortOrder) => {
  const response = await axios.get(`${portBackend}/api/users`, {
    params: { search, page, size, sortOrder },
  })
  return response.data.data
}
