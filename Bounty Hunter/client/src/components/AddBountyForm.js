import React, { useState} from 'react'


export default function AddBountyForm(props){
    console.log(props)
    const initInputs ={ FirstName: props.FirstName ||  "",
                        LastName: props.LastName || "",
                        type: props.type || "",
                        BountyAmount: props.BountyAmount || "" }
                        
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const{name, value} =e.target
        setInputs(prevInputs=> ({...prevInputs, [name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        //post Req
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
        <input 
            type= "text" 
            name="FirstName" 
            value={inputs.FirstName} 
            onChange={handleChange} 
            placeholder='First Name' />
        <input 
            type= "text" 
            name="LastName" 
            value={inputs.LastName} 
            onChange={handleChange} 
            placeholder='Last Name' />
         <input 
            type= "text" 
            name="type" 
            value={inputs.type} 
            onChange={handleChange} 
            placeholder='Type' />
         <input 
            type= "number" 
            name="BountyAmount" 
            value={inputs.BountyAmount} 
            onChange={handleChange} 
            placeholder='$Bounty' />
            <button>{props.btnText}</button>
        </form>
    )
}
