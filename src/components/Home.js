 import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button'


const Home = () => {
  return (
    <div>
      <h1>
        Home
      </h1>
      <div className="LoginBtn">
          <Nav.Link href='/'>
            <Button>
              Login
            </Button>
          </Nav.Link>
        </div>      
    </div>
  )
}

export default Home;
