import PayLayout from "./PageLayout/PayLayout";
import { Col } from "react-bootstrap";
const Dashboard = () =>{
    return(
        <PayLayout>
            <Col md={9}>
                <div className="dashboardHome">
                    <h1>Hello Dashboard</h1>
                </div>
            </Col>
        </PayLayout>
    )
}
export default Dashboard;