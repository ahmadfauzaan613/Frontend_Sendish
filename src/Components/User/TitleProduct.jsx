import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function TitleProduct(props) {
  const { title, subTitle, namelink, colorText } = props
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <div className="mb-5 text-left">
          <p className={`text-${colorText} text-[32px] font-bold`}>{title}</p>
          <p className={`text-${colorText} text-md`}>{subTitle}</p>
        </div>
        <p className={`text-${colorText} hover:cursor-pointer text-lg ${colorText === 'white' ? 'texthover' : 'texthover2'}`}>
          {namelink} <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
        </p>
      </div>
    </React.Fragment>
  )
}

export default TitleProduct
