import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About.js";
import Hero from "../components/Hero.js";
import Main from "../components/Main.js";
import Contact from "../components/Contact.js";
import { useNavigate } from 'react-router-dom';
import Shop from "./Shop.js";

export default function Navbar() {

    let [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate()

    const [cart, setCart] = React.useState([])
    localStorage.setItem("cart", JSON.stringify(cart))

    const handleAdd = (el) => {
        cart.push([el.name, el.price, el.imgUrl])
        console.log(cart)
        setCart(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
    }




    return (
        <>
            <div className="nav">
                <div className="nav--items">
                    <div className="logo--text flex" onClick={() => navigate("/")}>
                        <img className="h-10 mx-2" src={require("../images/pet--logo.png")} alt="" />
                        PetShop
                    </div>

                    <img className="img"
                        onClick={() => setIsOpen((prevState) => !prevState)}
                        src={isOpen ? require("../images/close.png") : require("../images/menu.png")}
                        alt="menu"
                    ></img>

                    <ul className={isOpen ? "menu--icon--open" : "menu--icon--closed"}>

                        <Link to="/"> <div className="li--style">HOME</div></Link>

                        <Link to="/products"><div className="li--style">PRODUCTS</div></Link>

                        <Link to="/about"><div className="li--style">ABOUT</div></Link>

                        <Link to="/contact"><div className="li--style">CONTACT</div></Link>

                        <Link to="/shop">
                            <div className="li--style">
                                <div className="li--style"><img className="h-5 cursor-pointer" src={require("../images/cart.png")} alt="" /></div>
                            </div>
                        </Link>



                    </ul>

                </div>
            </div>

            <Routes>
                <Route path="/" element={<><Hero /><Main handleAdd={handleAdd} /></>} />
                <Route path="/products" element={<><Main handleAdd={handleAdd} /></>} />
                <Route path="/about" element={<><About /></>} />
                <Route path="/contact" element={<><Contact /></>} />
                <Route path="/shop" element={<><Shop data={cart} /></>} />

            </Routes>
        </>
    );

}
