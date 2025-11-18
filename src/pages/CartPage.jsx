import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'


export default function CartPage() {
const items = useSelector((s) => s.cart.items)
const dispatch = useDispatch()


const entries = Object.values(items)
const totalCount = entries.reduce((s, it) => s + it.qty, 0)
const totalCost = entries.reduce((s, it) => s + it.qty * it.price, 0)


return (
<div className="page">
<h2>Shopping Cart</h2>


<div className="cart-summary">
<p>Total items: <strong>{totalCount}</strong></p>
<p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>
</div>


<div className="cart-list">
{entries.length === 0 && <p>Your cart is empty.</p>}
{entries.map((it) => (
<div key={it.id} className="cart-item">
<img src={it.thumb} alt={it.name} />
<div className="cart-item-info">
<h4>{it.name}</h4>
<p>Unit price: ${it.price.toFixed(2)}</p>
<div className="cart-item-controls">
<button onClick={() => dispatch(decrement(it.id))}>-</button>
<span>{it.qty}</span>
<button onClick={() => dispatch(increment(it.id))}>+</button>
<button className="delete" onClick={() => dispatch(removeItem(it.id))}>Delete</button>
</div>
</div>
</div>
))}
</div>


<div className="cart-actions">
<button onClick={() => alert('Coming Soon')}>Checkout</button>
<Link to="/products" className="btn-link">Continue Shopping</Link>
</div>
</div>
)
}