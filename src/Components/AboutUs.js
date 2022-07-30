import React from 'react'
import NavBar from './NavBar'

export default function AboutUs() {
  return (
    <>
      <NavBar/>
      <div className="aboutus border border-dark">
      </div>
      <div className="container bg-text my-5">
        <div className="row justify-content-center">
            <div className="col-12">
              <h1>About Us</h1>
            </div>
            <div className="row">
              <div className="col-12">
              <p>
              <br></br>
                E-AOSC is an online Lawyer Booking Website which helps you in searching for best Lawyers around you.
                <br></br>
                This Website Recommend you Lawyers based on Collaborative Filtering Technique.
                <br></br>
                You Can Book, Rate and Search Lawyers. Rating Lawyers will result in better and accurate
                <br></br>
                Reccomendations based on our Collaborative Filtering Model. 
              </p>
              </div>
            </div>
        </div>
      </div>
    </>
    
  )
}
