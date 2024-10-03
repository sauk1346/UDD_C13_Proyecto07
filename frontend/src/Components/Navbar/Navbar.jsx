import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Project07</p>
            </div>
            <ul className="nav-menu">
                <li onClick={ ()=>{ setMenu("shop") } }>Shop { menu === "shop" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("smartphone") } }>Smartphone { menu === "smartphone" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("laptop") } }>Laptop { menu === "laptop" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("tablet") } }>Tablet { menu === "tablet" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("smartwatch") } }>Smartwatch { menu === "smartwatch" ? <hr/> : <></> }</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar