import React from 'react'

function MenuKategori(props) {
  const { key, onClick, condition, title, iconActive, alt, iconNoActive } = props
  return (
    <div key={key} onClick={onClick} className={`flex items-end justify-between border-b mb-3  w-72  ${condition ? 'border-[#3d6b2f]' : 'border-[#747474]'} px-2 py-1 cursor-pointer`}>
      <p className={`text-[18px] ${condition ? 'text-[#3d6b2f] font-bold' : 'text-[#747474]'}`}>{title}</p>
      <img src={condition ? iconActive : iconNoActive} alt={alt} className="w-[40px] h-[40px]" />
    </div>
  )
}

export default MenuKategori
