import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './components.css'

const PageTransition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300} classNames="fade">
        <div className="page">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default PageTransition
