import axios from 'axios'

const portBackend = import.meta.env.VITE_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL

export const GetAllProduk = async (search, page, size, sortOrder, category) => {
  const response = await axios.get(`${portBackend}/api/produk`, {
    params: { search, page, size, sortOrder, category },
  })
  return response.data.data
}
