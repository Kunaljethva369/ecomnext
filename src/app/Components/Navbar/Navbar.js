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
                        <li className="nav-item">
                            <Link href={'/'}>
                                <span className='nav-link'>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/about'}>
                                <span className='nav-link'>About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/service'}>
                                <span className='nav-link'>Service</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar