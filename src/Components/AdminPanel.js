import React from 'react'
import AdminShowLawyers from './AdminShowLawyers';
import AdminNavBar from './AdminNavBar';

export default function AdminPanel() {
  
  console.log("pp")
  return (
    <div>
     <AdminNavBar/>
     <div className="container-fluid justify-content-center">
      <div className="row justify-content-center bg-dark text-white p-3 my-5">
       <h2>
       Admin Panel
        </h2>
      </div>
      <div className="row justify-content-center m-5">
      <h3>
      You can Add Lawyer, Delete Lawyer, Delete Users and Delete Orders
      </h3>
      </div>
     </div>
    </div>
  )
}
