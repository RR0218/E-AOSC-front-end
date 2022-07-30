import React from 'react'
import companyLogo from './logo.png';
import { NavLink } from 'react-router-dom'

export default function InitialScreen() {

  return (  
      <div className="container-fluid px-5 py-5 border con">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">E-AOSC</h1>
                            <p className="lead text-white-50 mb-4">Best Collaborative Filtering Law Website</p>
                            <p className="lead text-white-50 mb-4">Press Login if you already have an account</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <NavLink className="btn btn-outline-light btn-lg px-4 me-sm-3" to="/signup">SignUp</NavLink>
                                <NavLink className="btn btn-outline-light btn-lg px-4" to="/signin">Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
       </div>
  )
}
