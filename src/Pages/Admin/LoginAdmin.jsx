import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { Transition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../hooks/authHook'

function LoginAdmin() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])

  const [fieldFrom, setFieldFrom] = useState({
    username: null,
    password: null,
  })

  const handleChange = (e, type) => {
    const value = e.target ? e.target.value : e
    setFieldFrom((prevState) => ({
      ...prevState,
      [type]: value === '' ? null : value,
    }))
  }

  const navigate = useNavigate()
  const { mutate, isLoading, isError, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(fieldFrom, {
      onSuccess: () => {
        navigate('/v1/adminGlory/dashboard')
      },
      onError: (error) => {
        console.error('Login failed:', error)
      },
    })
  }

  console.log(fieldFrom)

  return (
    <React.Fragment>
      <Transition in={show} timeout={100}>
        <div className="bg-black h-screen">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white rounded-md p-3 w-[23vw]">
              <p className="text-center text-xl pb-3 font-bold">Admin</p>
              {isError && <div style={{ color: 'red' }}>Error: {error.message}</div>}
              <div className="mt-3">
                <Input type="text" placeholder="Username" value={fieldFrom.username} onChange={(val) => handleChange(val, 'username')} style={{ height: '42px' }} />
                <Input.Password placeholder="Password" value={fieldFrom.password} onChange={(val) => handleChange(val, 'password')} style={{ height: '42px', margin: '20px 0px' }} />
                <button onClick={handleSubmit} className="w-full p-2 bg-[#3d6b2f] rounded-md text-white">
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </React.Fragment>
  )
}

export default LoginAdmin
