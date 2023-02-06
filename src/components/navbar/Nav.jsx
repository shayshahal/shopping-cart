import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '/src/styles/navbar/Nav.module.css'

export default function Nav() {
    return (
        <nav className="Nav">
            <Link to='/'>Home</Link>
            <Link to='Shop'>Shop</Link>
        </nav>
    )
}

