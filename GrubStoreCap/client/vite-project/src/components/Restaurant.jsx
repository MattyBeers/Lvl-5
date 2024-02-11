import React, { useContext} from 'react'
import { Context } from '../context/Context'


export default function Restaurant (props) {
    const {deleteRestaurant} = useContext(Context)



    return (  

        <div className='restaurant-box'>
            <h1>Restaurant</h1>
            <h2>Name:{props.title} </h2>
            <p>Location:{props.location}</p>
            <p>Rating: {props.rating}</p>
            <button 
            className='delete-btn'
            onClick={()=> deleteRestaurant(props._id)}>
                Delete
            </button>
       </div>

    )
}

