import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"



export default () => {
    const { locations } = useContext(LocationContext)


    return (
        <>
            <h3>Locations</h3>
            
            <div className="locationContainer">
                {
                    locations.map(locationObj => {
                        return <Location key={locationObj.id} location={locationObj} />
                    })
                }
            </div>
        </>
    )
}