import React, { useEffect } from 'react'
import './visitProfile.css'
import {  useSelector } from 'react-redux'

function VisitProfile() {

    const profile = useSelector(state=> state.profiles.visitedProfile);

  console.log("myProfile",profile)
  // useEffect((e)=>{
  //   e.stopPropagation()
  // },[profile])

  return (
    <section className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-4 mb-sm-5">
          <div className="card card-style1 border-0">
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                </div>
                <div className="col-lg-6 px-xl-10">
                  <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                    <h3 className="h2 text-white mb-0">{profile ? profile.user.name : ""}</h3>
                    <span className="text-primary">{profile? profile.user.role : ""}</span>
                  </div>
                  <ul className="list-unstyled mb-1-9">

                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> {profile? profile.user.email:""}</li>
                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Current Rank:</span> {profile? profile.currentRank: ""}</li>
                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Highest Rank:</span> {profile? profile.highestRank: ""}</li>
                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Discord:</span> {profile? profile.discord :""}</li>
                    <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> {profile? profile.phone : ""}</li>
                  </ul>
                  <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                    <li><a href="#!"><i className="ti-twitter-alt" /></a></li>
                    <li><a href="#!"><i className="ti-facebook" /></a></li>
                    <li><a href="#!"><i className="ti-pinterest" /></a></li>
                    <li><a href="#!"><i className="ti-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-4 mb-sm-5">
          <div>
            <span className="section-title text-primary mb-3 mb-sm-4">About Me</span>
            <p>{profile? profile.description : ""}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default VisitProfile