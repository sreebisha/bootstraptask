import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Sidebar() {
    const [selectedValue, setSelectedValue] = useState("cards");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/home"
                        style={{ color: "white" }}
                    >
                        React App
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            style={{ color: "white" }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            style={{ color: "white" }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link style={{ color: "white" }}>
                            <Form.Select
                                aria-label="Default select example"
                                style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    borderBottom: "1px solid white",
                                }}
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                <option value="cards">Cards</option>
                                <option value="table">Table</option>
                                <option value="image-slider">
                                    Image Slider
                                </option>
                                <option value="accordion">Accordion</option>
                                <option value="model">Model</option>
                                {/* Add more options as needed */}
                            </Form.Select>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={`/${selectedValue}`}
                            style={{ color: "white" }}
                        >
                            <Button variant="success">Go</Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Sidebar;
