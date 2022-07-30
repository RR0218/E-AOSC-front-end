import Button from 'react-bootstrap/Button';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from './AdminNavBar';

export default function AdminShowUsers() {
    const [data,setData]= useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const loadUsers = async () => {
          await axios.get('http://127.0.0.1:8000/all_users')
          .then(response =>{
            if(Array.isArray(response.data))
            {
                setData(response.data)
            } 
          })
        }   
        loadUsers();
      },[reload]);

      const deleteUser = async(user_id)=>{
        await axios.get('http://127.0.0.1:8000/delete_user/'+user_id)
          .then(response =>{
                setReload(!reload)
          })
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
    
    {data.map((user,i)=>{
        return(
            <div key={i} className="row justify-content-center shadow-lg m-3 p-5">
                 <div  className="col-2">
                    {user.name}
                </div>
                <div  className="col-2">
                    {user.email}
                </div>
                <div  className="col-2">
                    {user.phone}
                </div>
                <div  className="col-2">
                    {user.country}
                </div>
                <div className="col-2 compbtn">
                    <Button className='btn btn-dark' onClick={()=>{
                        deleteUser(user.id)
                        
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
         <h2>Users</h2>
        </div>    
        <div className='row justify-content-center m-3 p-5 py-2 bg-dark text-white'>
            <div className="col-2">
                Name
            </div>
            <div className="col-2">
                Email
            </div>
            <div className="col-2">
                Phone
            </div>
            <div className="col-2">
                Country
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
