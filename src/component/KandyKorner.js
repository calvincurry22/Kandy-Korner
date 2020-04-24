import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./locations/Location.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import "./products/Product.css"
import "./KandyKorner.css"

export default () => (
    <>
       
        <LocationProvider>
            <ProductProvider>
                <LocationList />
                <ProductList />
            </ProductProvider>
        </LocationProvider>
      
    </>
)
