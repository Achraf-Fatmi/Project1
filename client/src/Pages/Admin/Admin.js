import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../../Componentes/RowDetails'
import { GetProfiles } from '../../redux/actions/profileActions'

function Admin() {
  const dispatch= useDispatch()

  const profiles = useSelector(state=> state.profiles)

  useEffect (()=>{
    async function fetchProfiles(){
    await dispatch (GetProfiles())
    }
    fetchProfiles()
   
  },[])


  return (
<div className="bg-light" style={{height: '100vh'}}>
        {/* form */}
        <div className="container p-4 mt-4">
          <div className="row justify-content-evenly mt-4">
            <div className="col-lg-12 col-md-12 mt-4">
              <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2" /> <h2>Profiles list</h2>
              </div>
              <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: 'white'}}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">name</th>
                      <th scope="col">ID</th>
                      <th scope="col">email</th>
                      <th scope="col">role</th>
                      <th scope="col">phone</th>
                      <th scope="col">description</th>
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      profiles.profiles.map(({_id, user, phone , description})=>(
                        <RowDetails _id={_id} user={user} phone={phone} description={description} />
                        
                      ))
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Admin