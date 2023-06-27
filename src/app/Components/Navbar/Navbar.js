'use client'
import Link from 'next/link';
import React from 'react'
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link href={'/'}>
                            <li className="nav-item">
                                <span className='nav-link'>Home</span>
                            </li>
                        </Link>
                        <Link href={'/about'}>
                            <li className="nav-item">
                                <span className='nav-link'>About</span>
                            </li>
                        </Link>
                        <Link href={'/service'}>
                            <li className="nav-item">
                                <span className='nav-link'>Service</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar