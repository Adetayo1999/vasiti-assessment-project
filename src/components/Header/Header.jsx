import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__top'>
          <div className='header__top-left'>
            <h3>
              <span>vasiti</span>.com
            </h3>
          </div>

          <div className='header__top-right'>
            <ul>
              <li>
                {" "}
                <Link to='/about'> About </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to='/about'> Stories </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to='/about'> Contact </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to='/about'> Log In</Link>{" "}
              </li>
              <li className='signup'>
                {" "}
                <Link to='/about'> Sign Up </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className='header__bottom'>
          <ul>
            <li>
              <Link to='/'>Marketplace</Link>
            </li>
            <li>
              <Link to='/'>WHolesale Center</Link>
            </li>
            <li>
              <Link to='/'>Seller center</Link>
            </li>
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Internships</Link>
            </li>
            <li>
              <Link to='/'>Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
