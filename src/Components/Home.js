import React,{useState} from 'react'
import NavBar from './NavBar'
import Search from './Search'
import {useLocation} from 'react-router-dom';
import TopLawyers from './TopLawyers'
import RecommendedLawyers from './RecommendedLawyers';
import UpdatePassword from './UpdatePassword'


export default function Home() {
  
  return (
    <div>
      <NavBar/>
      <div className="homecontent border border-dark">
        <UpdatePassword/>
        <div className="headinghome">
          <h2 className="display-6 fw-border text-center">Find and Book the Best Lawyers Near You</h2>
        </div>
        <Search/>
        <RecommendedLawyers/>
        <TopLawyers/>
      </div>
    </div>
  )
}
