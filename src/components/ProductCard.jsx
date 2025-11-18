import React from 'react'


export default function ProductCard({ product, onAdd, disabled }) {
return (
<div className="product-card">
<img src={product.thumb} alt={product.name} />
<div className="product-info">
<h4>{product.name}</h4>
<p>${product.price.toFixed(2)}</p>
<button onClick={() => onAdd(product)} disabled={disabled}>
{disabled ? 'Added' : 'Add to Cart'}
</button>
</div>
</div>
)
}