import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetAllUser } from '../Api/users'

export const UserAllData = (search, page, size, sortOrder) => {
  return useQuery({
    queryKey: ['users', search, page, size, sortOrder],
    queryFn: () => GetAllUser(search, page, size, sortOrder),
  })
}
