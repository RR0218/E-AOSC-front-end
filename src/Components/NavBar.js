import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import companyLogo from './logo.png';
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  const handleSignOut = () =>{
    localStorage.removeItem('id')
  }
  return (  
    <Navbar  className="navbar navbar-expand-sm navbar-light py-2 shadow-sm">
    <Container fluid>
    <img className="companylogo" src={companyLogo} alt="BigCo Inc. logo"/>
      <NavLink className="navbar-brand fw-fold fs-4" to="/home">E-AOSC</NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
          <NavLink className="nav-link" to="/home">Home</NavLink>
          <NavLink className="nav-link" to="/lawyers">Lawyers</NavLink>
          <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
        </Nav>
        <div className="buttons">
        <NavLink to="/orders" className="btn btn-outline-dark ms-2">
            My Orders
          </NavLink>
          <NavLink to="/" className="btn btn-outline-dark ms-2" onClick={handleSignOut}>
            Sign Out
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;