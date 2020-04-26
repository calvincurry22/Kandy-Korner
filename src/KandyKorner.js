import React, { useState } from "react"
import Dashboard from "./component/Dashboard"
import Auth from "./component/auth/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("kandy_customer") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}