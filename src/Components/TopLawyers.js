import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'


export default function TopLawyers() {
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(false);

      useEffect(() => {
        setLoading(true)
        const loadLawyers = async () => {
          await axios.get('https://eaosc-backend.herokuapp.com/lawyers/rating/')
          .then(response =>{
            if(Array.isArray(response.data))
            {
             setData(response.data)
             setLoading(false);
            }
          })
        }
        console.log(data)    
        loadLawyers();
      }, []);
  const Loading = () =>{
    return(
        <>
            Loading....
        </>
    )
  }

  const ShowLawyers = () =>{
    return(
    <>
    {data.map((lawyer,i)=>{
        return(
            <div key={i} className="col-md-3 mb-3">
                <Card>
                <Card.Img variant="top" src="https://legallawfirm.pk/wp-content/uploads/2021/08/1-Abdul-Hafeez-Pirzada-1.jpg" alt={lawyer.name}/>
                <Card.Body>
                    <Card.Title>{lawyer.name}</Card.Title>
                    <Card.Text>
                    Speciality: {lawyer.speciality}<br></br>
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
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-12 mb-5 mt-5">
                <hr />
                <h4 className='display-7 fw-border text-center'>Top Rated Lawyers</h4>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading/> : <ShowLawyers/>}
                
            </div>
        
        </div>
      </div>
    </div>
  )
}
