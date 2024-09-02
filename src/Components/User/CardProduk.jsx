import React from 'react'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardProduk(props) {
  const { key, image, alt, namaProduk, harga } = props
  return (
    <React.Fragment>
      <div className="px-3 mb-5" key={key}>
        <div className="bg-white w-full rounded-md h-full py-2 px-3 shadow-lg">
          <img src={image} alt={alt} className="w-full h-[25vh]  object-cover outline-none" />
          <p className="text-md  text-black  pt-2">{namaProduk}</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">{harga}</p>
            <button className="hover:bg-[#3d6b2f] hover:text-white border-[1px] border-[#3d6b2f] textSendish bg-transparent w-[4vw] h-full py-[7px] rounded-md">
              <FontAwesomeIcon icon={faBasketShopping} className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardProduk
