import React from 'react'
import './components.css'

function LoadingOnly() {
  return (
    <React.Fragment>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  )
}

export default LoadingOnly
