import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Nav = () => {

 const    navLink = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Register",
            path: "/register",
        },
        {
            name: "Signin",
            path: "/signin",
        },
        {
            name: "Dashboard",
            path: "/dashboard",
        }
    ];

  return (
    <div>
        <ul className='bg-success d-flex p-3 justify-content-between'>{navLink.map((link)=>(
            <li key={link.name}>
                <Link to={link.path} className='link'>{link.name}</Link>
            </li>
        ))}
        </ul>
            <Outlet />
        
    </div>
  )
}

export default Nav