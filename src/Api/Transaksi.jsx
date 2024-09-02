import axios from 'axios'

const portBackend = process.env.REACT_APP_BACKEND_URL

export const GetAllTransaksi = async (page, size, sortOrder, code_transaksi, nama_lengkap, metode_pembayaran, sistem_pembayaran, status_pembelian) => {
  const token = localStorage.getItem('token') // Ambil token dari localStorage

  const response = await axios.get(`${portBackend}/api/transaksi/transaksi-all`, {
    params: {
      page,
      size,
      sortOrder,
      code_transaksi,
      nama_lengkap,
      metode_pembayaran,
      sistem_pembayaran,
      status_pembelian,
    },
    headers: {
      Authorization: `Bearer ${token}`, // Tambahkan token ke header
    },
  })
  return response.data.data
}
