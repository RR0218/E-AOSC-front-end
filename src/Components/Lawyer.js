import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import userlogo from './user.png'

export default function Lawyer() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [lawyer,setLawyer] = useState([])
    const [loading,setLoading] = useState(false)
    const url = 'https://eaosc-backend.herokuapp.com/lawyer/'+id
        
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        setLoading(true)
        const loadLawyer = async () => {
            console.log(id)
            await axios.get(url)
            .then(
              response => {
                setLawyer(response.data)
                setLoading(false)
              })
          }
          loadLawyer();
        }, []);

    const goToOrders = () =>{
        navigate("/orders")
    }
    const handlePlaceOrder = async()=>{
        try {
            // make axios post request
            console.log("infunc")
            const user_id = localStorage.getItem('id')
            const lawyer_id = lawyer.id
            const lawyer_name = lawyer.name
            const field = lawyer.speciality
            console.log(typeof user_id+typeof lawyer_id+lawyer_name+field)
            const response = await axios.post("https://eaosc-backend.herokuapp.com/place_order/", {user_id,lawyer_id,lawyer_name, field});
            console.log(response)
            if(response.data === 'Order Placed')
            {
                handleShow()
            }
        } catch(error) {
            console.log(error)
        }
    }

    const Loading = () =>{
            return(
                <>
                    Loading....
                </>
            )
    }
    const ShowLawyer = ()=>{

        return(
            <> 
                <div className="col-lg-6 imgcol">
                    <img src={userlogo} alt={lawyer.name}
                    height='300px' width='450px'/>
                </div>
                <div className="col-lg-6  pd-5 shadow-lg">
                    <h4 className="text-uppercase text-black-50">
                        Speciality: {lawyer.speciality}
                    </h4>
                    <h1 className="display-5">{lawyer.name}</h1>
                    <p className="lead">
                        Orders Completed: {lawyer.orders_completed}
                        <br></br>
                        Rating {lawyer.Rating}
                        <br></br>
                        {/* {lawyer.state} */}
                        <br></br>
                        {lawyer.country}
                        <br></br>
                        {lawyer.city}
                    </p>
                    <Link className="btn btn-outline-dark" to="" onClick={handlePlaceOrder}>
                        Place Order
                    </Link>
                </div>
            </>
        )
    }

  return (
    <div>
    <NavBar/>
    <div className="d-flew bg-dark">
     .
    </div>
      <div className="container">
        <div className="row my-5">
            {loading ? <Loading/> : <ShowLawyer/>}
            
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click My Orders to view Order</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={goToOrders}>
            My Orders
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
