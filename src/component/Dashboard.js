import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./locations/Location.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import "./products/Product.css"
import "./KandyKorner.css"
import EmployeeList from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import "./employees/Employee.css"


export default () => (
    <>
       
        <LocationProvider>
            <ProductProvider>
                <EmployeeProvider>
                    <LocationList />
                    <ProductList />
                    <EmployeeList />    
                </EmployeeProvider>
            </ProductProvider>
        </LocationProvider>
      
    </>
)
