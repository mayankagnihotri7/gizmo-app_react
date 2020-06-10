import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";

function Header() {
    let header = <header className="header">
      <div className="container">
        <nav className="flex">
          <a href="#" className="logo">Logo</a>
          <ul className="flex navigation">
            <a href="#" className="border">Home</a>
            <a href="#" className="border">About</a>
            <a href="#" className="border">Contact</a>
          </ul>
        </nav>
      </div>
    </header>
    return header;
}

export default Header;