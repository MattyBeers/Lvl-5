import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.js'

export default function Bounty (props){
   const {FirstName, LastName, BountyAmount, deleteBounty, type, _id} =props
   const [editToggle, setEditToggle] = useState(false)
   
    return(
    <div className='bounty'>
            {!editToggle ?
                <>
            <h1>First Name: { FirstName }</h1>
            <h1>Last Name: { LastName }</h1>
            <h2>Bounty Amount:{ BountyAmount }</h2>
            <h3>Type: {type}</h3>
            <button 
            className="delete-btn"
            onClick={()=> props.deleteBounty(_id)}> 
            Delete
            </button>
            <button className='edit-btn'
             onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
            </button>
                </>
            :
                <>
            <AddBountyForm 
                FirstName ={FirstName}
                LastName ={LastName}
                BountyAmount={BountyAmount}
                type= {type}
                btnText="Submit Edit"
                submit = {props.editBounty}
                _id={_id}
            />
            <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        
    </div>
)}

