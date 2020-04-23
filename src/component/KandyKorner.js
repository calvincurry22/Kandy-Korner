import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./locations/Location.css"
import "./KandyKorner.css"


export default () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>


)
