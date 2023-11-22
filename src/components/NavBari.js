import { useLocalStorage } from '@uidotdev/usehooks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function NavBari() {
  const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()

  const handleLogout = (e)=>{
    e.preventDefault()
    setLogedIn([false])
    navigate('/client')
  }
  
  if (logedIn[0] === false){
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">JobManager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#kontakt">Kontakt</Nav.Link>
              <Nav.Link href="#info">Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">JobManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>
            <a href='/settings' className="text-secondary ms-2 align-items-center d-flex" ><i className="bi bi-gear-fill"></i></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );}
}

export default NavBari;