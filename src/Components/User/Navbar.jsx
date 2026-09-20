import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBasketShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../Assets/Logo_2-removebg-preview.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link to="/" className="brand" aria-label="Sendish, kembali ke beranda"><img src={Logo} alt="" /><span>sendish</span></Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation"><FontAwesomeIcon icon={open ? faXmark : faBars} /><span>{open ? 'Tutup' : 'Menu'}</span></button>
        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} id="main-navigation" aria-label="Navigasi utama">
          <a href="/#produk" onClick={() => setOpen(false)}>Produk</a><a href="/#tentang" onClick={() => setOpen(false)}>Tentang Sendish</a><a href="/#cara-pesan" onClick={() => setOpen(false)}>Cara pesan</a>
        </nav>
        <div className="header-actions"><Link to="/keranjang" aria-label="Lihat keranjang"><FontAwesomeIcon icon={faBasketShopping} /></Link><Link to="/login" aria-label="Masuk ke akun"><FontAwesomeIcon icon={faUser} /></Link></div>
      </div>
    </header>
  )
}
export default Navbar
