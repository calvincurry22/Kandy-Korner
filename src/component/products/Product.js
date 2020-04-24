import React from "react"

export default ({ product, productType }) => (
    <section className="product">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__type">Candy Type: {productType.type}</p>
        <p className="product__price">Price: {product.price}</p>
    </section>
)