import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-4">
                <div className="container-fluid">
                    <Link to='home' className="navbar-brand">E-Shopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='home' className="nav-link active" aria-current="page">Home</Link>
                            <Link to='product' className="nav-link">Products</Link>
                            <Link to='cart' className="nav-link">Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header