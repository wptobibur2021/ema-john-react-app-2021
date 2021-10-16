import logo from '../../images/logo.png'
import './Header.css'
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
const Header = () => {
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
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;