import react from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About.js";
import Hero from "../components/Hero.js";
import Main from "../components/Main.js";
import Contact from "../components/Contact.js";
import { useNavigate } from 'react-router-dom';



export default function Navbar() {

    let [isOpen, setIsOpen] = react.useState(false);
    const navigate = useNavigate()

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

                    </ul>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<><Hero /><Main /></>} />
                <Route path="/products" element={<><Main /></>} />
                <Route path="/about" element={<><About /></>} />
                <Route path="/contact" element={<><Contact /></>} />
            </Routes>
        </>
    );

}
