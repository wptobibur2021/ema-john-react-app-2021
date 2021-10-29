import React from "react";
import { Container, Row} from "react-bootstrap";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import TopBar from "../TopBar/TopBar";
const PayLayout = ({children}) =>{
    return(
        <div className="mainRootContainer">
            <div className="dashboardContainer">
                <TopBar></TopBar>
                <div className="dashboardSections">
                    <Container fluid>
                        <Row>
                            <LeftSidebar></LeftSidebar>
                            {children}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default PayLayout