import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Lawyers from './Components/Lawyers';
import Lawyer from './Components/Lawyer';
import InitialScreen from './Components/InitialScreen';
import Orders from './Components/Orders'
import AboutUs from './Components/AboutUs';
import AdminPanel from './Components/AdminPanel';
import AdminShowLawyers from './Components/AdminShowLawyers';
import AdminShowUsers from './Components/AdminShowUser';
import AdminShowOrder from './Components/AdminShowOrder';
import AdminAddLawyer from './Components/AdminAddLawyer';
import AdminSignIn from './Components/AdminSignIn';


function App() {

  //const [users,setUsers] = useState([]);
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<InitialScreen/>} />   
          <Route path="/home" element={<Home/>} />    
          <Route path="/signup" element={<SignUp/>} /> 
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/lawyers" element={<Lawyers/>} />
          <Route path="/lawyers/:id" element={<Lawyer/>} />   
          <Route path="/orders" element={<Orders />} />  
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/adminhome" element={<AdminPanel />} />     
          <Route path="/admin/showlawyer" element={<AdminShowLawyers/>} />     
          <Route path="/admin/showusers" element={<AdminShowUsers/>} />     
          <Route path="/admin/showorders" element={<AdminShowOrder/>} />     
          <Route path="/admin/addlawyer" element={<AdminAddLawyer/>} />     
          <Route path="/admin" element={<AdminSignIn/>} />             
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
