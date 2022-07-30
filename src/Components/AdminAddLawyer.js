import React ,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import AdminNavBar from './AdminNavBar';
import { useNavigate } from "react-router-dom";

function AdminAddLawyer() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setContactNo] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [field, setField] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleSubmit = async(e) => {
        // store the states in the form data
        e.preventDefault();
        try {
            // make axios post request
            console.log(typeof name+typeof email+typeof phone+typeof password+typeof country+typeof city+typeof field)
            const req = {
                'name': name,
                'email': email,
                'contact_no': phone,
                'password': password,
                'country': country,
                'city': city,
                'area_of_practice': field
            }
            const response = await axios.post("https://eaosc-backend.herokuapp.com/new_lawyer/",req);
            console.log(response.data)
            if(response.data==='Lawyer Added Successfully')
            {
                navigate("/adminhome")
            }
            else{
                console.log("op")
                setShow(true);
            }
        } catch(error) {
            setShow(true);
        }
    }
    
return (
    <>
    <AdminNavBar/>
    <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-6 border d-flex justify-content-center pb-5">
    <Container>
    <div className='signup_heading d-flex justify-content-center my-4'>
        <h1 >Add Lawyer</h1>
    </div>        
    <Form id='signup_form' onSubmit={handleSubmit}>
    <FloatingLabel controlId="_name" label="Name" className="mb-3" size='sm'>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </FloatingLabel>
    <Row>
        <Col>
        <FloatingLabel controlId="_email" label="Email" className="mb-3" size='sm'>
            <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </FloatingLabel>    
        </Col>
        <Col>
        <FloatingLabel controlId="_contact" label="Contact Number" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="Contact Number" onChange={(e)=>setContactNo(e.target.value)}/>
        </FloatingLabel>
        </Col>        
    </Row>
    <FloatingLabel controlId="_password" label="Password" className="my-4">
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    </FloatingLabel>
    <Row>
        <Col>
        <FloatingLabel controlId="_country" label="Country" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}/>
        </FloatingLabel>    
        </Col>
        <Col>
        <FloatingLabel controlId="_city" label="City" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
        </FloatingLabel>
        </Col>     
    </Row>
    <Row>
        <FloatingLabel controlId="_field" label="Field" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="Area_Of Practice" onChange={(e)=>setField(e.target.value)}/>
        </FloatingLabel>
    </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid Email or Phone Number!..</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminAddLawyer;