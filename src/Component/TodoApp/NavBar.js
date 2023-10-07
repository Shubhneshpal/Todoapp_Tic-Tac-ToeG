import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/NavBar.css"

function NavBar() {
  return (
    <>
       <nav className="navbar">
      <ul className="navbar-list">
        <NavLink className="navbar-item" to="/" >TodoApp</NavLink>
        <NavLink className="navbar-item" to="/tic-tac">Tic-Tac</NavLink>        
      </ul>
    </nav>
    </>
  )
}

export default NavBar
