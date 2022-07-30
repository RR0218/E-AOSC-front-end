import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'
import userlogo from './user.png'


export default function RecommendedLawyers() {
    const id = localStorage.getItem('id')
    console.log("id recom"+id) 
    const url = 'https://eaosc-backend.herokuapp.com/highest_rated/'+id
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(false);
    const [isrecommend, setIsRecom] = useState(false)

      useEffect(() => {
        setLoading(true)
        const loadLawyers = async () => {
          await axios.get(url)
          .then(response =>{
            if(response.data !== "No Recomendations Found")
            {
                setData(response.data)
                setLoading(false);
            }
            else{
                setIsRecom(true)
            }
          })
        }
        console.log(data)    
        loadLawyers();
      }, []);
  const NoRecommend =()=>{
    return(
        <>
            No Recommendations found for you....
            <br></br>
            Seems Like You have not Rated a Lawyer Yet....
            <br></br>
            Rate Lawyers to see Recommendations
        </>
    )
  }     
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
            <div key={i} className="col-md-3 mb-3 zoom">
                <Card>
                <Card.Img variant="top" src={userlogo} alt={lawyer.name}/>
                <Card.Body>
                    <Card.Title>{lawyer.name}</Card.Title>
                    <Card.Text>
                    Speciality: {lawyer.speciality}<br></br>
                    Orders Completed: {lawyer.orders_completed}
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
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-12 mb-5 mt-5">
                <hr />
                <h4 className='display-7 fw-border text-center'>Recommended Lawyers</h4>
            </div>
            <div className='row justify-content-center'>
                {isrecommend ? <NoRecommend/> : loading ? <Loading/> : <ShowLawyers/>}
                {}
                
            </div>
        
        </div>
      </div>
    </div>
  )
}
