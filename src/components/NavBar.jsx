import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../images/profile.jpg";

const NavSpacer = styled.div`
height:70px;
`;

const navLinks = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Resume", route: "/resume" },
    { name: "Transcript", route: "/transcript" },
    { name: "Contact", route: "/contact" }
];

export default function NavBar() {

    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    return (

        <>

            <NavSpacer />

            <Navbar
                expand="lg"
                fixed="top"
                expanded={expanded}
                style={{
                    background: "linear-gradient(90deg,#0b0b0b,#121212)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid #111",
                    padding: "12px 0",
                    transition: "0.3s"
                }}
            >

                <Container fluid style={{ padding: "0 40px" }}>

                    {/* ===== LOGO ===== */}

                    <Navbar.Brand
                        as={Link}
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >

                        <img
                            src={Logo}
                            alt="logo"
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}
                        />

                        <span
                            style={{
                                color: "#d4af37",
                                fontWeight: "600",
                                fontSize: "17px"
                            }}
                        >
                            Jakpat Saartaiam
                        </span>

                    </Navbar.Brand>


                    {/* ===== MOBILE BUTTON ===== */}

                    <Navbar.Toggle
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            background: "#d4af37",
                            border: "none"
                        }}
                    />


                    <Navbar.Collapse>

                        <Nav
                            className="ms-auto"
                            style={{
                                gap: "45px",
                                fontWeight: "500",
                                fontSize: "16px"

                            }}
                        >

                            {navLinks.map((item) => (

                                <Nav.Link
                                    key={item.route}
                                    as={Link}
                                    to={item.route}
                                    onClick={() => setExpanded(false)}
                                    style={{
                                        color: location.pathname === item.route ? "#d4af37" : "#ddd",
                                        transition: "0.25s",
                                        position: "relative"
                                    }}

                                    onMouseEnter={(e) => {
                                        e.target.style.color = "#d4af37";
                                    }}

                                    onMouseLeave={(e) => {
                                        if (location.pathname !== item.route) {
                                            e.target.style.color = "#ddd";
                                        }
                                    }}

                                >

                                    {item.name}

                                </Nav.Link>

                            ))}

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>

    )

}