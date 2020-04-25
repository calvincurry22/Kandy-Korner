import React, { useRef, useContext, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import { Button } from "reactstrap"



export default (props) => {
    const { locations } = useContext(LocationContext)
    const { addEmployees } = useContext(EmployeeContext)
    const name = useRef()
    const location = useRef()
    const isManager = useRef()
    const notManager = useRef()
    const wage = useRef()
    const fullTime = useRef()
    const partTime = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        const hourlyPay = parseInt(wage.current.value)

        if(locationId === 0) {
            alert("Please select a location")
        } else {
            addEmployees({
                name: name.current.value,
                location: locationId,
                manager: managerCheck,
                fullTime: shiftCheck,
                hourlyWage: hourlyPay
            })
            .then(props.toggler)
        }
    }

    const [managerCheck, setManager] = useState()
    const [shiftCheck, setShift] = useState()
    
    
    
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Hire Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="EmployeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <p>Is employee a Manager?</p>
                    <label htmlFor="isManager">Yes
                    <input
                        type="radio"
                        id="isManager"
                        ref={isManager}
                        required
                        autoFocus 
                        value= "Manager"
                        onChange={evt => setManager(true)}
                        
                        
                        className="form-control"
                    />
                    </label>
                    <br></br>
                    <label htmlFor="notManager">No
                    <input
                        type="radio"
                        id="notManager"
                        ref={notManager}
                        required
                        autoFocus
                        value= "Associate"
                        onChange={evt => setManager(false)}
                        className="form-control"
                    />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <p>Full-time?</p>
                    <label htmlFor="fullTime">Yes
                    <input
                        type="radio"
                        id="fullTime"
                        ref={fullTime}
                        required
                        autoFocus
                        value="Full-time"
                        onChange={evt => setShift(true)}
                        className="form-control"
                    />
                    </label>
                    <br></br>
                    <label htmlFor="partTime">No
                    <input
                        type="radio"
                        id="partTime"
                        ref={partTime}
                        required
                        autoFocus
                        value="Part-time"
                        onChange={evt => setShift(false)}
                        className="form-control"
                    />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyWage">Hourly Wage: </label>
                    <input
                        type="number"
                        id="hourlyWage"
                        ref={wage}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}