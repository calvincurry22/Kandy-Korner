import React from "react"


export default ({ location }) => (
    <section className = "location">
        <h4 className="location__name"> {location.name}</h4>
        <p className="location__address">Address: {location.address}</p>
        <p className="location__sqFt">Sq. Footage: {location.squareFootage}</p>
        <p className="handicap__access">Handicap Accessible?:  
            {
                (location.handicapAccessible) ? location.handicapAccessible = "yes" : location.handicapAccessible = "no"
            }
        </p>
    </section>
)