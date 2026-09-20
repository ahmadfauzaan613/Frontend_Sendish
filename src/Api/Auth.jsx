import axios from 'axios'

const portBackend = import.meta.env.VITE_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL

export const LoginAdmin = async (data) => {
  const response = await axios.post(`${portBackend}/api/auth/login`, data)
  return response.data
}
