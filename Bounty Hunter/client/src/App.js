import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'

export default function App() {
 const [bounties, setBounties] = useState([])

 function getBounties(){
     axios.get("/bounties")
      .then (res => setBounties(res.data))
      .catch(err => console.log(err.response.data.errMsg))
     }

function addBounty(newBounty){
  axios.post("/bounties", newBounty)
  .then(res => {
    setBounties(prevBounties =>[...prevBounties, res.data])
  })
  .catch(err => console.log(err))
}

function deleteBounty(bountyId){
  axios.delete(`/bounties/${bountyId}`)
  .then(res =>{
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
  })
  .catch(err => console.log(err))
}

function editBounty(updates, bountyId){
  axios.put(`/bounties/${bountyId}`, updates)
  .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !==bountyId ? bounty :res.data))
  })
  .catch(err => console.log(err))
}

// function handleFilter(e) {
//   if(e.target.value === "reset") {
//       getBounties()
//   } else {
//          axios.get(`/bounty/search/type?type=${e.target.value}`)
//       .then(res => setBounties(res.data))
//       .catch(err => console.log(err))
//   }
// }

function handleFilter(e){
  if(e.target.value ==="reset"){
    getBounties()
  }  else{
      axios.get(`/bounties/search/type?type=${e.target.value}`)
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }
}

 useEffect(() => {
    getBounties()
 }, [])
 
  return (
 <div>
    <div className="bounty-container">
        <AddBountyForm submit={addBounty} btnText="Add Bounty" />
       
        <h4>Filter by type</h4>
        <select onChange={handleFilter} className = "filter-form">
            <option value="reset">-All Types-</option>
            <option value="Sith">Sith</option>
            <option value="Cartel">Cartel</option>
            <option value="Terrorist">Terrorist</option>
        </select>

        {
        bounties.map(bounty =>  <Bounty {...bounty} editBounty={editBounty}deleteBounty={deleteBounty} key={bounty.FirstName}
          />)
        }
    </div>
 </div>
  )}
