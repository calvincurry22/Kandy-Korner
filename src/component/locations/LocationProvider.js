import React, { useState, useEffect } from "react"


export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8090/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocations = location => {
        return fetch("http://localhost:8090/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        Load all locations when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        console.log("****  Location APPLICATION STATE CHANGED  ****")
    }, [locations])

    return (
        <LocationContext.Provider value={{
            locations, addLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}