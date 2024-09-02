import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo2 from '../../Assets/Logo_2-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const toggleDropdown = () => setIsOpen(!isOpen)
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} className="textSendish text-lg" />
      </div>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Logout
          </a>
        </div>
      )}
    </div>
  )
}

function Navbar() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className=" py-5">
        <div className="container mx-auto flex items-center justify-between">
          <div onClick={() => navigate('/')} className=" h-full cursor-pointer">
            <img src={Logo2} clas alt="Logo Sendish" className="h-full w-[60px]" />
          </div>
          <div className="flex items-center space-x-10">
            <p className="cursor-pointer">Promo</p>
            {/* <p>Produk</p>
            <p>Konfirmasi Pembayaran</p>
            <p>Status Pemesanan</p> */}
          </div>

          <div className="flex  items-center ">
            <div onClick={() => navigate('/keranjang')} className="w-[50px] h-[50px] justify-center cursor-pointer flex items-center ">
              <FontAwesomeIcon icon={faBasketShopping} className="textSendish text-lg" />
            </div>
            <div onClick={() => navigate('/login')} className="w-[50px] h-[50px] justify-center cursor-pointer flex items-center ">
              <FontAwesomeIcon icon={faUser} className="textSendish text-lg" />
            </div>
            {/* <UserDropdown /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
