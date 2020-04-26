import React, { useContext } from "react"
import { Button } from "reactstrap"
import { CustomerCandyContext } from "../customers/CustomerCandyProvider"



export default ({ product, productType }) => {
    const { addCandy } = useContext(CustomerCandyContext)
    return(
        <section className="product">
            <h4 className="product__name">{product.name}</h4>
            <p className="product__type">Candy Type: {productType.type}</p>
            <p className="product__price">Price: {product.price}</p>
            <button className="purchase__button"
                type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        addCandy({
                            customerId: parseInt(localStorage.getItem("kandy_customer")),
                            candyId: product.id
                        })
                        alert(`${product.name} added to cart!`)
                    }
                }>Purchase</button>
        </section>
    )
}

