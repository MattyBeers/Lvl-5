import React from 'react'
import { Router, Routes, Route, Link } from 'react-router-dom'
// import {Context} from "./context/Context.jsx"
import Home from './components/Home.jsx'
import Customer from './components/Customer.jsx'
import Restaurant from './components/RestaurantList.jsx'
import './styles.css'

function App() {
 
 return (
    
    <div>
   
      <nav style = {{
        margin: 10,
        display: "flex",
        width: "100vw",
        justifyContent: "space-around"
      }}>

        <Link to = "/" >
          Home </Link>

        <Link to = "./Customer">
          Customer </Link>

        <Link to = "./Restaurant">
          Resturuant </Link>

      </nav>
    
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/Customer" element ={<Customer/>}/>
        <Route path = "/Restaurant" element ={<Restaurant/>} />
      </Routes>

    </div>
    
  );
}

export default App
