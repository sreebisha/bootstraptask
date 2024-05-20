import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2>Dashboard</h2>
                    <p>Welcome to the admin panel!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
