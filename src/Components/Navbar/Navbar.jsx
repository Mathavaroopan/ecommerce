import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("");

  return (
    <div className='nav-bar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>VAANGIFY</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link to="/" style={{textDecoration: 'none'}}>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("men")}}><Link to="/men" style={{textDecoration: 'none'}}>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("women")}}><Link to="/women" style={{textDecoration: 'none'}}>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to="/kids" style={{textDecoration: 'none'}}>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <Link to="/cart"><img src={cart_icon} alt="cart-icon" /></Link>
            <h3 style={{marginLeft: -25}}>(0)</h3>
        </div>
    </div>
  )
}

export default Navbar
