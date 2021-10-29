import './Registration.css'
import React, {useState} from 'react'
import { Tooltip, Container, Row, Col, Form, InputGroup, FormControl, Button, OverlayTrigger} from 'react-bootstrap'
import { FaLock, FaEnvelope, FaGoogle, FaYahoo, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Registration = () => {
    const {user, error, sineInWithGoogle, sineInWithYahoo} = useAuth()

    // Use State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // ToolTip
    const gooGleTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Login With Google
        </Tooltip>
    );
    const gitHubTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Login With Yahoo
        </Tooltip>
    );
    const faceBookTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Login With FaceBook
        </Tooltip>
    );
    // Input Field Handle
    const emailHandle = (e) =>{
        setEmail(e.target.value)
    }
    const passwordHandle = e =>{
        setPassword(e.target.value)
    }
    return (
        <div className="login-page-sectins">
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }} sm={{ span: 12 }}>
                    <div className="login-form-sections">
                        <div className="loginTitle">
                            <h5>User <span>Registration</span></h5>
                        </div>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                <FormControl onBlur={emailHandle} type="email" className="login-form" required placeholder="Email" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><FaLock/></InputGroup.Text>
                                <FormControl onBlur={passwordHandle} type="password" required placeholder="Password" />
                            </InputGroup>
                            <Button type="submit" variant="primary">Registration</Button>
                                <br></br>
                            <NavLink to="/login">Have a Account?</NavLink>
                        </Form>
                        <div className="thirdPartiLoginSystem mt-3">
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={gooGleTooltip}
                            >
                                <Button onClick={sineInWithGoogle} variant="primary"><FaGoogle/></Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={gitHubTooltip}
                            >
                                <Button onClick={sineInWithYahoo} variant="primary"><FaYahoo/></Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={faceBookTooltip}
                            >
                                <Button variant="primary"><FaFacebook/></Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default Registration
