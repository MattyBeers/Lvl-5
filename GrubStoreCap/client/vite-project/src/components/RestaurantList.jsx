import React, {useContext}  from 'react'
import { Context } from '../context/Context'
import Restaurant from './Restaurant'
import AddRestaurantForm from './AddRestaurantForm'


function RestaurantList(props){
   const {restaurant, addRestaurant, deleteRestaurant} = useContext(Context)

 const mappedRestaurants =  restaurant && restaurant?.map(restaurant => <Restaurant {...restaurant} key={restaurant.title}
     deleteRestaurant={deleteRestaurant}/>)
    
    
    return(
<div className ="rest-container">
  <AddRestaurantForm addRestaurant={addRestaurant} />
                      {restaurant && mappedRestaurants}
</div> 

   
     )}

export default RestaurantList