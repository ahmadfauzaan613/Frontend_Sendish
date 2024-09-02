import React from 'react'
import Layout from '../../Components/User/Layout'
import Sayur3 from '../../Assets/sayur3.jpg'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Layout navbar={false} whatsapp={false} footer={false}>
        <div className="grid grid-cols-12  bg-white min-h-screen">
          <div className="relative col-span-8" style={{ backgroundImage: `url(${Sayur3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <p className="relative z-10">xxxx</p>
          </div>
          <div className="col-span-4 mx-[6rem]">
            <div class="flex items-center justify-center min-h-screen">
              <div class="flex flex-col items-center w-full max-w-full">
                <p className="text-center text-3xl mb-[1rem] font-bold">Login</p>
                <div className="mb-4 w-full">
                  <p className="text-md mb-1">Email</p>
                  <input type="email" id="email" name="email" placeholder="Email" className="p-2 w-full outline-none border border-[#b8d26f] rounded-md" />
                </div>
                <div className="w-full">
                  <p className="text-md mb-1">Password</p>
                  <input type="password" id="Password" name="Password" placeholder="Password" className="p-2 w-full outline-none border border-[#b8d26f] rounded-md" />
                </div>
                <button className="text-center hover:bg-[#3d6b2f] hover:text-white hover:font-bold border outline-none border-[#3d6b2f] mt-8 w-full p-2 rounded-md text-[#3d6b2f]">Login</button>
                <p onClick={() => navigate('/register')} className="text-md mt-6 text-center cursor-pointer hover:underline">
                  Belum punya akun? Silahkan Daftar
                </p>
                <p onClick={() => navigate('/')} className="text-md mt-[1rem] text-[#3d6b2f] font-bold cursor-pointer">
                  Kembali ke halaman awal
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Login
