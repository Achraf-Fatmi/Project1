import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardsComponent from '../../Componentes/CardsComponent'
import { GetProfiles } from '../../redux/actions/profileActions'
import './Coaches.css'

function Coaches() {
  const dispatch= useDispatch()

  const profiles = useSelector(state=> state.profiles)
  

  useEffect (()=>{
    async function fetchProfiles(){
    await dispatch (GetProfiles())
    }
    fetchProfiles()
   
  },[])

  return (
    <div className="bg-dark" style={{ height: "100vh" ,marginTop:"5%", marginRight:"5%", marginLeft:"5%" ,borderRadius: "10px"}}>
      <h3 style={{ display: "flex", justifyContent: "center" }}>All Coaches</h3>
      <div
        className="Card-Container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}
      >
        {profiles.profiles.map(({ _id, user, phone, description }) =>
          user.role === "COACH" ? (
            <CardsComponent 
              _id={_id}
              user={user}
              phone={phone}
              description={description}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Coaches