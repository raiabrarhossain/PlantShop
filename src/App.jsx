import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import ProductList from './pages/ProductList'
import CartPage from './pages/CartPage'


export default function App() {
return (
<div>
<Header />
<main>
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/products" element={<ProductList />} />
<Route path="/cart" element={<CartPage />} />
</Routes>
</main>
</div>
)
}