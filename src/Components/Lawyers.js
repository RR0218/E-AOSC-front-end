import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
import userlogo from './user.png'


export default function Lawyers() {
    const [data,setData]= useState([]);
    const [filter,setFilter]= useState(data);
    const [loading,setLoading]= useState(false);

      useEffect(() => {
        setLoading(true)
        const loadLawyers = async () => {
          await axios.get('https://e-aosc.herokuapp.com/all_lawyers')
          .then(response =>{
            if(Array.isArray(response.data))
            {
              setData(response.data)
              setFilter(response.data)
              setLoading(false);
            } 
          })
        }   
        loadLawyers();
      }, []);
  const Loading = () =>{
    return(
        <>
            Loading....
        </>
    )
  }
  const filterLawyers = (speciality) =>{
    const updatedList = data.filter((x)=>x.speciality===speciality)
    setFilter(updatedList)
  }
  const ShowLawyers = () =>{
    return(
    <>
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <a className='btn btn-outline-dark me-2' onClick={()=>
          setFilter(data)}>All</a> 
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Criminal Defence")}>Criminal Defence</a>
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Car Accident")}>Car Accident</a>
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Business Law")}>Business Law</a>
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Tax")}>Tax</a>
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Bankrupcy")}>Bankrupcy</a>
        <a className='btn btn-outline-dark me-2' onClick={()=>
          filterLawyers("Family Law")}>Family Law</a>
    </div>
    {filter.map((lawyer,i)=>{
        return(
            <div key={i} className="col-md-3 mb-3 zoom">
                <Card>
                <Card.Img  className="" variant="top" src={userlogo} alt={lawyer.name}/>
                <Card.Body>
                    <Card.Title>{lawyer.name}</Card.Title>
                    <Card.Text>
                    Speciality: {lawyer.speciality}
                    <br></br>
                    Orders Completed: {lawyer.oders_completed}
                    <br></br>
                    Rating: {lawyer.Rating}
                    </Card.Text>
                    <NavLink className="btn btn-outline-dark me-2" to={'/lawyers/'+lawyer.id}>Book Lawyer</NavLink>
                </Card.Body>
                </Card>
            </div>
        )
    })}
    </>
    )
  } 
  
  return (
    <>
    <NavBar/>
    <div className="homecontent">
      <div className="container mt-4">
        <div className="row">
            <div className="col-12 mb-5">
                <h4 className='display-7 fw-border text-center'>Find Lawyers By Area of Practice</h4>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading/> : <ShowLawyers/>}
                
            </div>
        
        </div>
      </div>
    </div>
    </>
  )
}
