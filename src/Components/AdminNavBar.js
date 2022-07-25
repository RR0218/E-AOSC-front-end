import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function AdminNavBar() {
    const handleSignOut = () =>{
        localStorage.removeItem('id')
      }
  return (
    <div>
    <Navbar  className="navbar navbar-expand-sm navbar-light py-2 shadow-sm">
      <Nav className="mx-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
        <NavLink className="nav-link" to="/admin/showlawyer">Lawyers</NavLink>
        <NavLink className="nav-link" to="/admin/showusers">Users</NavLink>
        <NavLink className="nav-link" to="/admin/showorders">Orders</NavLink>
      </Nav>
      <div className="buttons">
      <NavLink to="/admin/addlawyer" className="btn btn-outline-dark ms-2">
          Add Lawyer
        </NavLink>
        <NavLink to="/" className="btn btn-outline-dark ms-2" onClick={handleSignOut}>
          Sign Out
        </NavLink>
      </div>
  </Navbar>
  </div>
  )
}
