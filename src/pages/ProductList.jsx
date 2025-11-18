import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { addToCart } from '../features/cart/cartSlice'


export default function ProductList() {
const products = useSelector((s) => s.products.items)
const cartItems = useSelector((s) => s.cart.items)
const dispatch = useDispatch()


const grouped = products.reduce((acc, p) => {
(acc[p.category] = acc[p.category] || []).push(p)
return acc
}, {})


const handleAdd = (p) => {
dispatch(addToCart(p))
}


return (
<div className="page">
<h2>Our Plants</h2>
{Object.keys(grouped).map((category) => (
<section key={category} className="category">
<h3>{category}</h3>
<div className="grid">
{grouped[category].map((p) => (
<ProductCard
key={p.id}
product={p}
onAdd={handleAdd}
disabled={Boolean(cartItems[p.id])}
/>
))}
</div>
</section>
))}
</div>
)
}