import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';


function Navigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container className='navbarContainer'>
        <Navbar.Brand href="/">SnapBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/albums">Album</Nav.Link>
            </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
   <Card.Img className='Logo' variant="top" src="" alt='' /> Your logo
   
    </>
  )
}

export default Navigation