import React from 'react'

function Coursel(props) {
  const { image, alt, key } = props
  return (
    <React.Fragment>
      <div className="flex items-center justify-center" key={key}>
        <img src={image} alt={alt} className="w-full h-[50vh] rounded-md object-cover outline-none" />
      </div>
    </React.Fragment>
  )
}

export default Coursel
