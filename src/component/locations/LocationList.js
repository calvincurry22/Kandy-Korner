import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"



export default ({ location }) => {
    const { locations } = useContext(LocationContext)


    return (
        <>
            <h3>Locations</h3>
            
            <div className="location__container">
                {
                    locations.map(locationObj => {
                        return <Location key={locationObj.id} location={locationObj} />
                    })
                }
            </div>
        </>
    )
}