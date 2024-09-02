import React from 'react'
import Logo2 from '../Assets/Logo_2-removebg-preview.png'
import LoadingOnly from './LoadingOnly'

function LoadingPage() {
  return (
    <React.Fragment>
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img src={Logo2} alt="Logo Sendish" className="mb-7" />
          <LoadingOnly />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoadingPage
