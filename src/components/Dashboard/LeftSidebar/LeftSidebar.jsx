import './LeftSidebar.css'
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const LeftSidebar = () =>{
    return(
        <Col md={3}>
            <div className="leftSidebarMenuBar boxShadow">
                <ul className="leftMenuItems">
                    <li className="leftMenuItem">Add Product</li>
                    <li className="leftMenuItem"><Link to='/dashboard/add-product'>Add Product</Link></li>
                    <li className="leftMenuItem">Add Product</li>
                    <li className="leftMenuItem">Add Product</li>
                    <li className="leftMenuItem">Add Product</li>
                    <li className="leftMenuItem">Add Product</li>
                    <li className="leftMenuItem">Add Product</li>
                </ul>
            </div>
        </Col>
    )
}
export default LeftSidebar;