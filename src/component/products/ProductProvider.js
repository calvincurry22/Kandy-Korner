import React, { useState, useEffect } from "react"


export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    

    const getProducts = () => {
        return fetch("http://localhost:8090/products")
        .then(res => res.json())
        .then(setProducts)
    }



    const addProducts = product => {
        return fetch("http://localhost:8090/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8090/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }

    const addProductTypes = type => {
        return fetch("http://localhost:8090/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        })
            .then(getProductTypes)
    }

    useEffect( () => {
        getProductTypes().then(getProducts)
    }, [])

    useEffect( () => {
        console.log("Product Application State Changed")
    }, [products])

    return (
        <ProductContext.Provider value={{
            products, addProducts, productTypes, addProductTypes
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}