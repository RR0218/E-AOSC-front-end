import Button from 'react-bootstrap/Button';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from './AdminNavBar';

export default function AdminShowOrder() {
    const [data,setData]= useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const loadOrders = async () => {
          await axios.get('http://127.0.0.1:8000/orders')
          .then(response =>{
            if(Array.isArray(response.data))
            {
                setData(response.data)
            } 
          })
        }   
        loadOrders();
      },[reload]);

      const deleteOrder = async(order_id)=>{
        await axios.get('http://127.0.0.1:8000/delete_order/'+order_id)
          .then(response =>{
                setReload(!reload)
          })
      }
  
  const ShowLawyers = () =>{
    return(
    <>
    
    {data.map((order,i)=>{
        return(
            <div key={i} className="row justify-content-center shadow-lg m-3 p-5">
                 <div  className="col-2">
                    {order.order_id}
                </div>
                <div  className="col-2">
                    {order.lawyer_name}
                </div>
                <div  className="col-2">
                    {order.field}
                </div>
                <div  className="col-2">
                    {order.status}
                </div>
                <div className="col-2 compbtn">
                    <Button className='btn btn-dark' onClick={()=>{
                        deleteOrder(order.order_id)
                    }}>
                        Delete
                    </Button>
                </div>
            </div>
           
        )
    })}
    </>
    )
  } 
  
  return (
    <>
    <AdminNavBar/>
    <div className="">
      <div className="container mt-4">
        <div className="row justify-content-center">
         <h2>Orders</h2>
        </div>    
        <div className='row justify-content-center m-3 p-5 py-2 bg-dark text-white'>
            <div className="col-2">
                User_ID
            </div>
            <div className="col-2">
                Lawyer Name
            </div>
            <div className="col-2">
                Scope Of Case
            </div>
            <div className="col-2">
                Status
            </div>
            <div className="col-2">
               
            </div>
        </div>
        {<ShowLawyers/>}
        </div>
    </div>
    </>
  )
}
