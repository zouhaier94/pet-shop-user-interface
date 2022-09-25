import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <Footer />
        </div>
    );
}


