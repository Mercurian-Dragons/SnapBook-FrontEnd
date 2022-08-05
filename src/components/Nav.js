import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


function Navigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container className='navbarContainer'>
        <Navbar.Brand href="#home">SnapBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pictures">Pictures</Nav.Link>
            <Nav.Link href="/album">Album</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <div className="LoginBtn">
          <Nav.Link href='/'>
            <Button>
              Login
            </Button>
          </Nav.Link>
        </div>      
      </Container>
    </Navbar>
   <Card.Img className='Logo' variant="top" src="" alt='' /> Your logo
    </>
  )
}

export default Navigation