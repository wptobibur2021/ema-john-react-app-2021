import logo from '../../images/logo.png'
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPowerOff } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className='Header'>
            <div className="logo-section">
                <img className='logo' src={logo} alt='Logo'/>
            </div>
            <div className="mainmenu">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <NavLink className="menu-item" to="/home"><FaHome/></NavLink>
                            <NavLink className="menu-item" to="/shop">Shop</NavLink>
                            <NavLink className="menu-item" to="/order-review">Order</NavLink>
                            <NavLink className="menu-item" to="/inventory">Inventory</NavLink>
                            
                            {
                                user?.email ? 
                                <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logOut}><FaPowerOff/> Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <NavLink className="menu-item" to='/login'>Login</NavLink>
                            }
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;