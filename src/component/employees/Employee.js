import React from "react"


export default ({ employee, location }) => (
    <section className="employee">
        <h4 className="employee__name">{employee.name}</h4>
        {/* <p className="employee__location">Location: {location.name}</p> */}
        <p className="employee__title">Title: {(employee.manager) ? "Manager" : "Associate"}</p>
        <p className="employee__availability">Shift: {(employee.fullTime) ? "Full-time" : "Part-time"}</p>
        <p className="employee__wage">Hourly Wage: {employee.hourlyWage}</p>
    </section>
)