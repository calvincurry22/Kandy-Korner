import React, { useState, useEffect } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])


    const getCustomerCandy = () => {
        return fetch("http://localhost:8090/customerCandy")
        .then(res => res.json())
        .then(setCustomerCandy)
    }

    const addCandy = candy => {
        return fetch("http://localhost:8090/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candy)
        })
            .then(getCustomerCandy)
    }

    useEffect( () => {
        getCustomerCandy()
    }, [])

    useEffect( () => {
        console.log("Customer Order Application State Changed")
    }, [customerCandy])

    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, addCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}