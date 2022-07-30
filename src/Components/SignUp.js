import React ,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setContactNo] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("")
    const [btn, setBtn] = useState("")
    const handleClose = () => {
        if(btn === "Close")
        {
        setShow(false);
        }
        else{
            navigate('/signin')
        }
    }
    
    const handleSubmit = async(e) => {
        // store the states in the form data
        e.preventDefault();
        try {
            // make axios post request
            const response = await axios.post("http://127.0.0.1:8000/new_user/",{name,email,phone,password,country,city});
            //console.log(response.data)
            if(response.data==='User Added Successfully')
            {
                setMsg("User Added Successfully")
                setBtn("Go to Sign In")
                setShow(true);

            }
            else{
                setMsg("Invalid Informtion!... Try Again")
                setBtn("Close")
                setShow(true);
            }
        } catch(error) {
            setShow(true);
        }
    }
    
return (
    <>
    <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-6 border d-flex justify-content-center pb-5">
    <Container>
    <div className='signup_heading d-flex justify-content-center my-4'>
        <h1 >Sign Up</h1>
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
        <FloatingLabel controlId="State" label="State" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="State" onChange={(e)=>setCountry(e.target.value)}/>
        </FloatingLabel>    
        </Col>
        <Col>
        <FloatingLabel controlId="_city" label="City" className="mb-3" size='sm'>
            <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
        </FloatingLabel>
        </Col>        
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
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {btn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;