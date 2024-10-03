import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Project07</p>
            </div>
            <ul className="nav-menu">
                <li onClick={ ()=>{ setMenu("shop") } }><Link style={{textDecoration:'none'}} to='/'>Shop</Link>  { menu === "shop" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("smartphone") } }><Link style={{textDecoration:'none'}} to='/smartphone'>Smartphone</Link> { menu === "smartphone" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("laptop") } }><Link style={{textDecoration:'none'}} to='/laptop'>Laptop</Link> { menu === "laptop" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("tablet") } }><Link style={{textDecoration:'none'}} to='/tablet'>Tablet</Link> { menu === "tablet" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("smartwatch") } }><Link style={{textDecoration:'none'}} to='/smartwatch'>Smartwatch</Link> { menu === "smartwatch" ? <hr/> : <></> }</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar