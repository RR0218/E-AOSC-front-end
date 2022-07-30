import {useParams} from 'react-router';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from './AdminNavBar';

export default function AdminShowLawyers() {
    const [data,setData]= useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const loadLawyers = async () => {
          await axios.get('https://e-aosc.herokuapp.com/all_lawyers')
          .then(response =>{
            if(Array.isArray(response.data))
            {
                setData(response.data)
            }     
          })
        }   
        loadLawyers();
      },[reload]);

      const deleteLawyer = async(lawyer_id)=>{
        await axios.get('https://e-aosc.herokuapp.com/delete_lawyer/'+lawyer_id)
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
    
    {data.map((lawyer,i)=>{
        return(
            <div key={i} className="row justify-content-center shadow-lg m-3 p-5">
                 <div  className="col-2">
                    {lawyer.name}
                </div>
                <div  className="col-2">
                    {lawyer.speciality}
                </div>
                <div  className="col-2">
                    {lawyer.Rating}
                </div>
                <div  className="col-2">
                    {lawyer.oders_completed}
                </div>
                <div className="col-2 compbtn">
                    <Button className='btn btn-dark' onClick={()=>{
                        deleteLawyer(lawyer.id)
                        
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
         <h2>Lawyers</h2>
        </div>    
        <div className='row justify-content-center m-3 p-5 py-2 bg-dark text-white'>
            <div className="col-2">
                Name
            </div>
            <div className="col-2">
                Speciality
            </div>
            <div className="col-2">
                Rating
            </div>
            <div className="col-2">
                Orders Completed
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
