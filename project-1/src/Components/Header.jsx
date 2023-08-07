import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { NavDropdown } from 'react-bootstrap';
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));
  const logout = () =>{
    localStorage.clear();
    navigate('/login');
  }
 
  console.log(user);
    return (
        <div>
         <Navbar className='bg-yellow-600'>
        <Container>
          <Navbar.Brand href="#home">
          <Link to='/'>E-com</Link>
          </Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {
              localStorage.getItem('user-info') ?
              <>
              <Link to='/add'>Add-products</Link>
              <Link to='/updateProduct/:id'>Update-List</Link>
              <Link to='/productList'>Product-List</Link><br/>
              <Link to='/search'>Search-Product</Link>
              </>
              :
              <div>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              </div>
            }
        
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user && user.name}>
            <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null
          }
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;