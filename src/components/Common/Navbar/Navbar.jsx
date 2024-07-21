import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScrolled = () => {
  //     const scrollTop = window.pageYOffset
  //     setIsScrolled(scrollTop > 0)
  //   }
  //   window.addEventListener('scroll',handleScrolled)
  // }, [])

  return (
    <>
      <nav className={isScrolled ? "scrolled" : "navbar navbar-expand-lg py-3 fixed-top"}>
        <div className="container">
          <div className="logo">
            <Link to='/' className="navbar-brand">Hoogaaa</Link>
            <GiHamburgerMenu onClick={() => toggle === false ? setToggle(true) : setToggle(false)} />
          </div>
          <div>

            <ul className={toggle ? 'navbar-nav active' : 'navbar-nav'}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setToggle(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" onClick={() => setToggle(false)}>Our Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={() => setToggle(false)}>About Us</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={'/analytics'} className="dropdown-item" href="#">
                      Data & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link to={'/automation'} className="dropdown-item" href="#">
                      Automation & RPA
                    </Link>
                  </li>
                  <li>
                    <Link to={'/cloud'} className="dropdown-item" href="#">
                      Cloud Solution
                    </Link>
                  </li>
                  <li>
                  <Link to={'/product-engineering'} className="dropdown-item" href="#">
                    Product Engineering
                  </Link>
                </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/career" className="nav-link" onClick={() => setToggle(false)}>Career</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={() => setToggle(false)}>Contact Us</NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
//   <ul>
