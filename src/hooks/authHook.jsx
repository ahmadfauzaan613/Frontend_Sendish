import { useMutation } from '@tanstack/react-query'
import { LoginAdmin } from '../Api/Auth'
import { result } from 'lodash'

export const useLogin = () => {
  return useMutation({
    mutationFn: LoginAdmin,
    onSuccess: (data) => {
      localStorage.setItem('token', result(data, 'data.token', null))
      localStorage.setItem('username', result(data, 'data.user.username', null))
      localStorage.setItem('role', result(data, 'data.user.role', null))
    },
    onError: (error) => {
      console.error('Login failed:', error)
    },
  })
}
