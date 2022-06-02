import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardsComponent from '../../Componentes/CardsComponent'
import { GetProfiles } from '../../redux/actions/profileActions'

function Users() {
  const dispatch= useDispatch()

  const profiles = useSelector(state=> state.profiles)
  console.log(profiles.profiles)
  

  useEffect (()=>{
    async function fetchProfiles(){
    await dispatch (GetProfiles())
    }
    fetchProfiles()
   
  },[])

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <h3 style={{ display: "flex", justifyContent: "center" }}>All Users</h3>
      <div
        className="Card-Container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}
      >
        {profiles.profiles.map(({ _id, user, phone, description }) =>
          user.role === "USER" ? (
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

export default Users