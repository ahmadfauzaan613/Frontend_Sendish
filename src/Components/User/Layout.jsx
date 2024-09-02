import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsappButton from '../../Components/whatsappButton'

function Layout(props) {
  const { children, navbar, whatsapp, footer } = props
  return (
    <React.Fragment>
      {navbar && <Navbar />}
      {children}
      {whatsapp && <WhatsappButton />}
      {footer && <Footer />}
    </React.Fragment>
  )
}

export default Layout
