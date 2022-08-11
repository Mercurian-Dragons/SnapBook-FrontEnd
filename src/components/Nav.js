import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container className='navbarContainer'>
        <Navbar.Brand href="/albums">SnapBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar">
            <Nav.Link href="/albums">Home</Nav.Link>
            {/* <Nav.Link href="/albums">Albums</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation