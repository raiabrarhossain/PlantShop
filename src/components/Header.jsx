import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header() {
const items = useSelector((state) => state.cart.items)
const totalCount = Object.values(items).reduce((s, it) => s + it.qty, 0)


return (
<header className="header">
<div className="logo">
<Link to="/">PlantShop</Link>
</div>
<nav>
<Link to="/products">Products</Link>
<Link to="/cart" className="cart-link">
🛒
<span className="cart-count">{totalCount}</span>
</Link>
</nav>
</header>
)
}