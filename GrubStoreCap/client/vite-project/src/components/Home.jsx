import React from 'react'
import {useNavigate} from "react-router-dom"



function Home() {
    const navigate = useNavigate()

    return (  
        <div>
            <h1>Welcome To MunchMate</h1>
            <h2>Continue as user</h2>
            <h2> Continue as Business Owner</h2>

            <p>Continue as a User </p>
            <br></br>
            <button onClick={()=> navigate('./Customer')}>User</button>
            <br></br>
            <p>continue as an owner </p>
            <button onClick={()=> navigate('./Restaruant')}>Owner</button>

        </div>

    )
}

export default Home;