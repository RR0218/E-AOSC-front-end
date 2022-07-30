import React ,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { NavLink} from 'react-router-dom'
import userlogo from './user.png'

export default function Search() {

  const [data,setData] =useState([])
  const [formvalue, setValue]=useState("")
  const [show, setShow] = useState(false)
  const [isresultfound, setIsresultfound] = useState(true)

  const SearchResults = async()=>{
    await axios.get('https://eaosc-backend.herokuapp.com/search/'+formvalue)
          .then(response =>{
            console.log(response.data)
             if(response.data !== "No Results Found" && Array.isArray(response.data)){
              setData(response.data)
              setShow(true)
              setIsresultfound(true)
             }
             else{
              setShow(false)
              setIsresultfound(false)
             }
          })
  }

  const ShowResults = () =>{
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
    <div className="">
      <Form className="d-flex expand-sm searchbar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value = {formvalue}
              onChange={(e)=>setValue(e.target.value)}
            />
            <Button variant="outline-success" onClick={()=>SearchResults()}>Search</Button>
      </Form>
      <div className="container mt-3">
          <div className="row">
            {show ? <><p>Showing Results</p>
            <ShowResults/> </>: !isresultfound ? <><p>No Results Found</p></>: <></>}
          </div>
      </div>
    </div>
  )
}
