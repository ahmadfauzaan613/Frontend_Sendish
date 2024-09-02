import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetAllTransaksi } from '../Api/Transaksi'

export const TransaksiAllData = (page, size, sortOrder, code_transaksi, nama_lengkap, metode_pembayaran, sistem_pembayaran, status_pembelian) => {
  return useQuery({
    queryKey: ['transaksi', page, size, sortOrder, code_transaksi, nama_lengkap, metode_pembayaran, sistem_pembayaran, status_pembelian],
    queryFn: () => GetAllTransaksi(page, size, sortOrder, code_transaksi, nama_lengkap, metode_pembayaran, sistem_pembayaran, status_pembelian),
  })
}
