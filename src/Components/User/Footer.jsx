import React from 'react'
import Logo from '../../Assets/Logo_2-removebg-preview.png'
import instagram from '../../Assets/instagram.png'
import facebook from '../../Assets/facebook.png'
import tiktok from '../../Assets/tiktok.png'
import whatsapp from '../../Assets/whatsapp.png'

const socials = [
  { href: 'https://www.instagram.com/sendish.id/', icon: instagram, label: 'Instagram Sendish' },
  { href: 'https://wa.me/6281266990063', icon: whatsapp, label: 'WhatsApp Sendish' },
  { href: 'https://www.facebook.com/profile.php?id=61562401439446', icon: facebook, label: 'Facebook Sendish' },
  { href: 'https://www.tiktok.com/@sendish.id', icon: tiktok, label: 'TikTok Sendish' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div className="footer-brand"><div><img src={Logo} alt="" /><strong>sendish</strong></div><p>Kebutuhan dapur harian yang lebih mudah dipilih, dikonfirmasi, dan dipesan.</p></div>
        <div className="footer-links"><strong>Jelajahi</strong><a href="/#produk">Pilihan produk</a><a href="/#tentang">Tentang Sendish</a><a href="/#cara-pesan">Cara memesan</a></div>
        <div className="footer-contact"><strong>Hubungi kami</strong><a href="https://wa.me/6281266990063" target="_blank" rel="noreferrer">+62 812-6699-0063</a><div className="social-links">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><img src={social.icon} alt="" /></a>)}</div></div>
      </div>
      <div className="site-container site-footer__bottom"><span>© {new Date().getFullYear()} Sendish</span><span>Belanja seperlunya, masak sesukanya.</span></div>
    </footer>
  )
}
export default Footer
