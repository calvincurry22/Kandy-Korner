import React from "react"
import { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import EmployeeForm from "./EmployeeForm"
import Employee from "./Employee"
import "./Employee.css"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Employees</h2>

            <div className="fakeLink href" onClick={toggle}>New Employee</div>

            <ul className="employeeContainer">
                {
                    employees.map(employee => {
                        const loc = locations.find(l => l.id === employee.location)

                        return <Employee key={employee.id} location={loc} employee={employee} />
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}