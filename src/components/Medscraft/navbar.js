import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaVideo,
  FaHospital,
  FaFileMedical,
  FaInfoCircle,
  FaEnvelope,
  FaGavel,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import medscraftlogo from "../../assets/img/medscraftlogo.png";

const pages = [
  { name: "Home Visit", path: "/homevisit", icon: <FaHome /> },
  { name: "Find Doctor", path: "/finddoctor", icon: <FaUserMd /> },
  { name: "Clinic On Boarding", path: "/cliniconboarding", icon: <FaHospital /> },
  { name: "Virtual Visit", path: "/virtualvisit", icon: <FaVideo /> },
];

const mobilePages = [
  { name: "Find Doctor - Book an appointment", path: "/finddoctor", icon: <FaUserMd /> },
  { name: "Video Consult - Consult top doctors", path: "/videoconsult", icon: <FaVideo /> },
  { name: "Surgeries - Expert Surgical Care", path: "/surgeries", icon: <FaHospital /> },
  { name: "View Medical Records", path: "/viewmedicalrecords", icon: <FaFileMedical /> },
  { name: "ABDM", path: "/abdm", icon: <FaFileMedical /> },
  { name: "About Us", path: "/aboutus", icon: <FaInfoCircle /> },
  { name: "Contact Us", path: "/contactus", icon: <FaEnvelope /> },
  { name: "Terms of Service", path: "/termsofservice", icon: <FaGavel /> },
];

const rightButtons = [{ name: "Join Our team", path: "/login" }];

function ResponsiveNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src={medscraftlogo} alt="Medscraft" className="weblogo" style={{ height: "40px" }} />
          <span style={{ fontSize: "22px", fontFamily: 'Lato, sans-serif', color: "#13a7e7", fontWeight: "800" }}>
            Med
          </span>
          <span style={{ fontSize: "22px", fontFamily: 'Lato, sans-serif', color: "#dd6f8c", fontWeight: "800" }}>
            scraft
          </span>
        </Navbar.Brand>

        {/* Mobile Menu Button */}
        <Button variant="primary" onClick={handleShow} className="d-lg-none">
          <FaUser />
        </Button>

        {/* Desktop Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            {pages.map((page) => (
              <Nav.Link as={Link} to={page.path} key={page.name} className="d-flex align-items-center">
                {page.icon}
                <span className="ms-2">{page.name}</span>
              </Nav.Link>
            ))}
          </Nav>

          {/* Desktop Right Buttons */}
          <Nav>
            {rightButtons.map((button) => (
              <Button
                as={Link}
                to={button.path}
                variant="outline-primary"
                className="me-2"
                key={button.name}
              >
                {button.name}
              </Button>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Offcanvas for Mobile Menu */}
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Hi Guest</Offcanvas.Title>
            <Button variant="link" onClick={handleClose}>
              <FaTimes />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {mobilePages.map((page) => (
                <Nav.Link as={Link} to={page.path} key={page.name} onClick={handleClose} className="d-flex align-items-center">
                  {page.icon}
                  <span className="ms-2">{page.name}</span>
                </Nav.Link>
              ))}
            </Nav>

            <Nav className="flex-column mt-3">
              {rightButtons.map((button) => (
                <Button
                  as={Link}
                  to={button.path}
                  variant="primary"
                  className="mb-2"
                  key={button.name}
                >
                  {button.name}
                </Button>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
