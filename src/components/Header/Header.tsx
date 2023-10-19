import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';


const Header = () => {
  return (
    <div>
        <Navbar    expand="lg" fixed="top" style={{backgroundColor: "#fffff6"}}>
        <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft: "90px", color: "#985421", fontWeight:"bold", fontSize:"30px"}} >myTutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-lg-0 ms-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#"
             style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"bold",
              fontSize:"18px"}}
              >
              Home
              </Nav.Link>
              <Nav.Link href="/About"
               style={{
                marginLeft: "20px",
                color: "#3F556B", 
                fontWeight:"bold",
                fontSize:"18px"}}
              >
              About</Nav.Link>
             <Nav.Link href="/Estonianlesson"
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"bold",
              fontSize:"18px"}}
              >
              Estonian Lesson
              </Nav.Link>
            </Nav>
            <GoogleTranslate/>
            <Button className='bookaservice-btn mx-2' 
             style={{backgroundColor: "#985421", borderRadius: "50px", width: "150px"}} >
             Price
            </Button>
            <Button href="/Contact" className='bookaservice-btn mx-2'
             style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "150px"}} >
             Contact
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}
export default Header