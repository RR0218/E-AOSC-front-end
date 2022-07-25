import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Orders() {
    const id = localStorage.getItem('id')
    const [lawyerid, setLawyerId] = useState(0)
    let iscompleted = false
    const url = 'https://eaosc-backend.herokuapp.com/user-orders/'+id
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(true);
    const [reload, setReload] = useState(false)
    const [show, setShow] = useState(false);  
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClose = () => setShow(false);
        
    useEffect(() => {
        setLoading(true)
        const loadOrders = async () => {
          await axios.get('https://eaosc-backend.herokuapp.com/user-orders/'+id')
          .then(response =>{
            if(Array.isArray(response.data))
            {
             setData(response.data)
             setLoading(false);
            }
          })
        }  
        loadOrders();
      },[reload]);
 
    
  const handleCompleted = async (order_id,lawyer_id) =>{
    console.log(lawyer_id)
    const url1= 'https://eaosc-backend.herokuapp.com/order_completed/'+order_id
    await axios.get(url1)
          .then(response =>{
            
          })  
    await axios.get('https://eaosc-backend.herokuapp.com/inc_orders/'+lawyer_id)
          .then(response =>{
            
          })  
          setReload(!reload)
    }    

 const handleRating = (e) =>{
   setLawyerId(e)
   setShow(true)
 }
 const submitRating = async(e) => {
    // submit=true;    
    // if(submit)
    // {
        setShow(false)
        e.preventDefault()
        const req= {
            "user_id": id,
            "lawyer_id": lawyerid,
            "rating": rating
          }
        try {
            // make axios post request
            const response = await axios.post("https://eaosc-backend.herokuapp.com/add_rating/",req);
           
        } catch(error) {
            console.log(error)
        } 
        
    //    setShow(false)
    //    submit = false
    // }
    // console.log("hello")
    // return(
    //     <>
    //     <Rating lawyerId = {lawyerid} lawyer_rating = {rating}/>
    //     </>
    // )
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
    {data.map((order,i)=>{
        if(order.status==="Completed")
        {
            iscompleted=true
        }
        else{
            iscompleted=false
        }

        return(
            <div key={i} className="row border mb-3">
                <div  className="col-6 p-3">
                    <h4>{order.lawyer_name}</h4>   
                    {order.field}
                    <br></br>
                    Status: {order.status}
                </div>
                <div className="col-6 pt-5">
                    <div className="compbtn">
                    {!iscompleted ? <>
                    <a to="" className='btn btn-outline-primary' onClick={()=>handleRating(order.lawyer_id)}>
                                            Rate {order.lawyer_name}
                                        </a> 
                    <a to="" className='btn btn-outline-dark ms-2' onClick={()=>{handleCompleted(order.order_id,order.lawyer_id)}}>
                                            Mark As Completed
                                        </a></>: <></>}
                    </div>
                </div>
            </div>
        )
    })}
    </>
    )
  } 
 
  return (
    <div>  
        <NavBar/>  
      <div className="container mt-4">
        <div className="row">
            <div className="col-12 mb-2">
                <h4 className='display-7 fw-border'>Your Orders</h4>
                <hr />
            </div>
            {<ShowLawyers/>}      
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate Lawyer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Rating Lawyer will Help Getting Better Recommendations
        <div className="star-rating mt-2">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                <button
                    type="button"
                    key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={() => setRating(index)}
                >
                    <span className="star">&#9733;</span>
                </button>
                );
            })}
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitRating}>
            Submit Rating
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
