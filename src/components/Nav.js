import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'


function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pictures">Pictures</Nav.Link>
            <Nav.Link href="/album">Album</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
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
  )
}

export default Navigation