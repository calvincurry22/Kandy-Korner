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
import { CustomerCandyProvider } from "./customers/CustomerCandyProvider"


export default () => (
    <>
       
        <LocationProvider>
            <ProductProvider>
                <EmployeeProvider>
                    <CustomerCandyProvider>
                        <LocationList />
                        <ProductList />
                        <EmployeeList />    
                    </CustomerCandyProvider>
                </EmployeeProvider>
            </ProductProvider>
        </LocationProvider>
      
    </>
)
