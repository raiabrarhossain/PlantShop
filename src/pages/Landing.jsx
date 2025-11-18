import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing() {
return (
<div className="landing">
<div className="landing-bg" />
<div className="landing-content">
<h1>PlantShop</h1>
<p className="company-desc">PlantShop is a small online nursery offering sustainably grown houseplants to brighten your home.</p>
<Link to="/products" className="btn-primary">Get Started</Link>
</div>
</div>
)
}