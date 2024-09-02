import React from 'react'
import whatsapp from '../Assets/whatsapp-dua.png'

function whatsappButton() {
  return (
    <React.Fragment>
      <a href="https://wa.me/6281266990063" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <img src={whatsapp} alt="Chat with us on WhatsApp" />
      </a>
    </React.Fragment>
  )
}

export default whatsappButton
