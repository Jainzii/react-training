import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h1>React Aufgaben</h1>
      <div className="button-container">
        <Link to="/task1">
          Aufgabe 1
        </Link>
        <Link to="/task2">
          Aufgabe 2
        </Link>
      </div>
    </div>
  )
}

export default Header