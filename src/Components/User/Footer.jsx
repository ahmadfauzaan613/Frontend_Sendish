import React from 'react'
import Logo2 from '../../Assets/Logo_2-removebg-preview.png'
import instagram from '../../Assets/instagram.png'
import facebook from '../../Assets/facebook.png'
import tiktok from '../../Assets/tiktok.png'
import whatsapp from '../../Assets/whatsapp.png'

function Footer() {
  return (
    <React.Fragment>
      <div className="bg-white py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-[56px] h-full  flex items-center justify-center">
              <img src={Logo2} clas alt="Logo Sendish" className="h-full w-full" />
            </div>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/sendish.id/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Indomaret" className="w-[1.5vw] h-full cursor-pointer" />
              </a>
              <a href="https://wa.me/6281266990063" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Indomaret" className="w-[1.5vw] h-full cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61562401439446" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Indomaret" className="w-[1.5vw] h-full cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@sendish.id" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="Indomaret" className="w-[1.5vw] h-full cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#b8d26f] ">
        <p className="text-white text-center font-bold">© 2024 Sendish</p>
      </div>
    </React.Fragment>
  )
}

export default Footer
