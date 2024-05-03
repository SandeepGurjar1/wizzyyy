import React from "react";

import "./Navbar.css"


export default function Navbar() {
  return (

    <div className="op">
        <nav>
            <p>Wizzyyy</p>
            <div className="eles">
                    <a href="/Home" className="ele1">Home</a>
                
                    <a href="/About" className="ele2">About Us</a>

                    <a href="/Contact" className="ele3">Contact Us</a>
                </div>
        </nav>
    </div>
  );
}
