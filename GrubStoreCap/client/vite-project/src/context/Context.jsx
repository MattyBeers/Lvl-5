import React, { useState, useEffect } from "react"
const Context = React.createContext()
import axios from 'axios'

function ContextProvider(props) {
const [user, setUser] = useState([])
const [restaurant, setRestaurant] = useState([])
const [menuItem, setMenuItem] = useState([])

//Get Restaruant
function getRestaurant(){
  axios.get("/api/restaurants")

  .then(res => setRestaurant(res.data))
  .catch(err => console.log(err))
}
//Get menu Item
function getMenuItem() {
  axios.get("/api/menuItems/restaurant/restaurantId")

  .then(res => setMenuItem(res.data))
  .catch(err => console.log(err) )
}
// Get users
function getUser(){
  axios.get("/api.customers")

  .then(res=>setUser(res.data))
  .catch(err => console.log(err))
}

// Add Restaraunt
function addRestaurant(newRestaurant){
  axios.post("/api/restaurants", newRestaurant)
  .then(res =>{
setRestaurant(prevRestaurants =>[ ...prevRestaurants, res.data])
  })
  .catch(err => console.log(err))
}
//Add menu item
function addMenuItem(newMenuItem){
  axios.post("/api/menuItems/restaurant/restaurantId", newMenuItem)
  .then(res =>{
    setMenuItem(prevMenuItem =>[...prevMenuItem, res.data])
  })
}
//Add user
function addUser(newUser){
  axios.post("/api/customers", newUser)
  .then(res =>{
    setUser(prevUser =>[...prevUser, res.data])
  })
}

//Delete Restaraunt
async function deleteRestaurant(restaurantId){
    try{
       await axios.delete(`/api/restaurants/${restaurantId}`)
       await getRestaurant()
    }

  catch(err){ console.log(err)}
}
//Delete Menu Item
async function deleteMenuItem(menuItemId){
  try{
    await axios.delete(`/api/menuItem/${menuItemId}`)
    await getMenuItem()
  }
  catch(err){ console.log(err)}
}
// Delete User
async function deleteUser(userId){
  try{
    await axios.delete(1/api/customer/{userId})
    await getUser()
  }
  catch(err){console.log(err)}
}
// Edit Restaurant =>
function editRestaurant(updates, restaurantId){
  axios.put(`/restaurants/${restaurantId}`, updates)
  .then(res => {
      setRestaurant(prevRestaurants => prevRestaurants.map(restaurant => restaurant._id !==restaurantId ? restaurant :res.data))
  })
  .catch(err => console.log(err))
}
// Edit MenuItem =>
function editMenuItem(updates, menuItemId){
  axios.put(`/menuItems/${menuItemId}`, updates)
  .then(res => {
      setMenuItem(prevMenuItems => prevMenuItems.map(menuItem => menuItem._id !==menuItemId ? menuItem :res.data))
  })
  .catch(err => console.log(err))
}
// Edit user =>
function editUser(updates, userId){
  axios.put(`/customers/${userId}`, updates)
  .then(res =>{
    setUser(prevUser => prevUser.map(user =>user._id !==userId ? menuItem :res.data))
  })
}

useEffect(()=>{
  getRestaurant()
  getMenuItem()
  getUser()
},[])

    return(
<Context.Provider value = {{
    user,
    restaurant,
    menuItem,
    deleteRestaurant,
    deleteMenuItem,
    deleteUser,
    editRestaurant,
    editMenuItem,
    addRestaurant,
    addMenuItem,
    addUser,
    editUser,
    setUser,
    setRestaurant
    }}>
    {props.children}
</Context.Provider>
  
    )
}
export {Context, ContextProvider}