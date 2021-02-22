import React from "react";
// import logo from "./logo192.png";

function Header(){
    return (
        <header className="container-fluid">
            <div className="row">
                <h1 className="col-12 col-lg-6 mx-auto logo">
                    <a href="/">
                        <img src="./logo192.png" alt="React Logo"/>
                        <span className="company-name text-wrap align-middle"> React Google Books Search</span>                        
                    </a>
                </h1>
                <div className="col-12 text-center">
                    <p>Search for and Save Books of Interest</p>
                </div>
            </div>
        </header>
    );
}

export {
    Header
};