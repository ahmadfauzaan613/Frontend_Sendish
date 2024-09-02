import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetAllProduk } from '../Api/Produk'

export const KategoriAllData = (search, page, size, sortOrder, category) => {
  return useQuery({
    queryKey: ['produks', search, page, size, sortOrder, category],
    queryFn: () => GetAllProduk(search, page, size, sortOrder, category),
  })
}
