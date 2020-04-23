import React from "react"


export default ({ location }) => (
    <section className = "location">
        <h4 className="location__address">Address: {location.address}</h4>
        <p className="location__sqFt">Sq. Footage: {location.squareFootage}</p>
        <p className="handicap__access">Handicap Accessible?:  
            {
                (location.handicapAccessible) ? location.handicapAccessible = "yes" : location.handicapAccessible = "no"
            }
        </p>
    </section>
)