import React, { useContext } from 'react'
import { Context } from "../context/Context.jsx"




function Customer(props) {
   const {userName} = useContext(Context)
   

    return (  
        <div>
            <h1>Customer</h1>
            <h2>Welcome MuchMate {userName}</h2>
            <h3>Please Choose from the List of Restaruants to view menu and make your order </h3>
            {props.Restaurant}
        </div>

    )
}

export default Customer;