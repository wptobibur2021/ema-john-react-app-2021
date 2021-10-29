import './TopBar.css'
import { Container, Row, Col } from "react-bootstrap";
const TopBar = () =>{
    return(
        <div className="headerContainer mb-3">
            <header>
                <Container fluid className="mb-2">
                    <Row>
                        <Col md={3}>
                            <div className="logoLeft">
                                <img src="./image/logo.png" alt="" className="logoImg"/>
                            </div>
                        </Col>
                        <Col md={{ span:3, offset:6  }}>
                            <div className="profileInfo">
                                <span>Md Tobibur Rohman</span>
                                <img src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg"  alt="" className="profileImg" />
                            </div>
                        </Col>
                    </Row>
                </Container>    
            </header>    
        </div>
    )
}
export default TopBar