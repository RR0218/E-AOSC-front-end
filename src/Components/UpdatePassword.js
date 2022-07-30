import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

export default function UpdatePassword() {
    const id= parseInt(localStorage.getItem('id'))
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("")

    const handleClose = () => {
        setShow(false);
    }

    const UpdateUserPassword = async() =>{
        try {
            const req = {
                "user_id": id,
                "password": password
            }
            const response = await axios.patch("https://eaosc-backend.herokuapp.com/update_user_password/",req);
            if(response.data==='Password Updated Successfully')
            {
                setMsg("Password Updated Successfully")
            }
            else{
                setMsg("Invalid Password!")
            }
        } catch(error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className="d-flex justify-content-end m-3">
        <Button variant="primary" onClick={()=>setShow(true)}>
            Reset Password
         </Button> 
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            Update Password
        </Modal.Header>
        <Modal.Body>
        <Form>
            <FloatingLabel controlId="_password" label="New Password" className="my-4">
                <Form.Control type="password" placeholder="New Password" onChange={(e)=>setPassword(e.target.value)}/>
            </FloatingLabel>
        </Form>
        {msg}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={UpdateUserPassword}>
        Reset Password
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}