import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import cartoon from '../../Assets/undraw_heavy_box_agqi.svg'

function Home() {
  const [show, setShow] = useState(false)
  const username = localStorage.getItem('username')

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <React.Fragment>
      <Transition in={show} timeout={100}>
        {(state) => (
          <div
            style={{
              opacity: state === 'entered' ? 1 : 0,
              transition: 'opacity 500ms ease-in-out',
            }}
          >
            <p className="text-[48px] font-bold">Welcome to dashboard, {username}</p>
            <div className="absolute right-0 bottom-0" style={{ padding: 24 }}>
              <img src={cartoon} alt="Cartoon Dashboard" className="w-[25vw] h-full" />
            </div>
          </div>
        )}
      </Transition>
    </React.Fragment>
  )
}

export default Home
