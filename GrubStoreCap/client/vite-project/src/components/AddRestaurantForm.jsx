import React, {useState} from 'react'


export default function AddRestaurantForm(props){
const initInputs = {title: "", location:"", rating:""}
const [inputs, setInputs] =useState(initInputs)

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs=>({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    console.log(inputs)
        //post request
        props.addRestaurant(inputs)
        setInputs(initInputs)
    
}

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={inputs.title} onChange={handleChange} placeholder='Title'/>
            <input type="text" name="location" value={inputs.location} onChange={handleChange} placeholder='Location'/>
            <input type="text" name="rating" value={inputs.rating} onChange={handleChange} placeholder='Rating'/>
            <button>Add Restururant</button>
        </form>
    )
}