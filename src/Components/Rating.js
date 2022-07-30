// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// export default function Rating(props) {
//     console.log("hhh")
//     const navigate = useNavigate();
//     const user_id = localStorage.getItem('id')
//     const lawyer_id = props.lawyerId
//     const ratings = props.lawyer_rating
//     console.log(user_id, lawyer_id, ratings)
//     const [req, setReq] = useState({
//         "user_id": {user_id},
//         "lawyer_id": {lawyer_id},
//         "rating": {ratings}
//       })
//       console.log(req)
//     useEffect(() => {
//         const ratingSubmit = async()=>{
//           await axios.post("http://127.0.0.1:8000/add_rating/",{req})
//           .then(response =>{
//             console.log("response area")
//             navigate("/orders")
//           })
//         }
//         ratingSubmit()
//       });
//   return (
//     <div>
//     </div>
//   )
// }
