import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <Link className='nav-c' to={"/"}>Home</Link>
        <Link className='nav-c' to={"/compare"}>Compare</Link>
        <Link className='nav-c' to={"/checkout"}>CheckOut</Link>
    </div>
  )
}

export default NavBar