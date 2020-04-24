import React, { useContext } from "react"
import Product from "./Product"
import { ProductContext } from "./ProductProvider"
import "./Product.css"


export default () => {
    const { products, productTypes } = useContext(ProductContext)
    
    return (
        <>
            <h3>Products</h3>

            <div className="productContainer">

                {
                    products.map(productObj => {
                        const foundType = productTypes.find(type => type.id === productObj.productTypeId)
                        return <Product key={productObj.id} productType={foundType} product={productObj} />
                    })
                }

            </div>
        </>
    )

    
}
