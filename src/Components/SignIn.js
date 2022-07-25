import React ,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleSubmit = async(e) => {
     e.preventDefault();
        try {
            // make axios post request
            const response = await axios.post("https://eaosc-backend.herokuapp.com/verify/",{email,password});
            if(response.data !== 'No Record Found' && response.data!==false)
            { 
              localStorage.setItem('id',response.data)
              navigate("/home")
            }
            else{
              setShow(true)
            }
        } catch(error) {
            console.log(error)
            setShow(true)
        }
    }

    
return (
  <div>
  <div className="container">
  <div className="row justify-content-center mt-5">
    <div className="col-md-6 border pb-5">
    <Container>
    <div className='signup_heading mt-5 d-flex justify-content-center'>
        <h1 >Log In</h1>
    </div>        
    <Form id='signup_form' onSubmit={handleSubmit}>
    <FloatingLabel controlId="_email" label="Email" className="mb-3" size='sm'>
            <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </FloatingLabel> 
    <FloatingLabel controlId="_password" label="Password" className="my-4">
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    </FloatingLabel>
      <Button variant="dark" type="submit">
        Log In
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
  </div>
  );
}

export default SignIn;