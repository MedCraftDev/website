import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import '../../assets/css/header.css';
import {
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
  { name: "Home Consultation", path: "/homevisit"},
  { name: "Clinic Consultation", path: "/Clinic Consultation"},
  { name: "Lab Test", path: "/labTest" },
  { name: "Family Health Manager", path: "/homevisit"},
  { name: "Create ABHA Card", path: "/"},
 
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

const rightButtons = [{ name: "Join Our team", path: "/registerform" }];

function ResponsiveNavbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();  // To get the current path

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="bg-navbar" expand="lg">
    <Container>
      {/* Logo */}
      <Navbar.Brand href="/">
        <img src={medscraftlogo} alt="Medscraft" className="weblogo" style={{ height: "40px" }} /><br/>
        <span style={{ fontSize: "18px", fontFamily: 'Lato, sans-serif', color: "#13a7e7", fontWeight: "800" }}>
          Med
        </span>
        <span style={{ fontSize: "18px", fontFamily: 'Lato, sans-serif', color: "#dd6f8c", fontWeight: "800" }}>
          scraft
        </span>
      </Navbar.Brand>

      {/* Mobile Menu Button */}
      {/* <Button variant="primary" onClick={handleShow} className="d-lg-none">
        <FaUser />
      </Button> */}

      {/* Desktop Links */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mx-auto navitem">
          {pages.map((page, index) => (
            <Nav.Link 
              as={Link} 
              to={page.path} 
              key={page.name} 
              className={`d-flex align-items-center text-dark ${index === 0 || location.pathname === page.path ? 'active' : ''}`}
            >
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
              className="me-2 text-light"
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

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import CloseIcon from "@mui/icons-material/Close";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonSearchIcon from "@mui/icons-material/PersonSearch";
// import VideoCallIcon from "@mui/icons-material/VideoCall";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import FolderSharedIcon from "@mui/icons-material/FolderShared";
// import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
// import InfoIcon from "@mui/icons-material/Info";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import GavelIcon from "@mui/icons-material/Gavel";
// import PersonIcon from "@mui/icons-material/Person";
// import medscraftlogo from "../../assets/img/medscraftlogo.png";

// const pages = [
//   { name: "Home Visit", path: "/homevisit", icon: <HomeIcon /> },
//   { name: "Find Doctor", path: "/finddoctor", icon: <PersonSearchIcon /> },
//   {
//     name: "Clinic On Boarding",
//     path: "/cliniconboarding",
//     icon: <LocalHospitalIcon />,
//   },
//   { name: "Virtual Visit", path: "/virtualvisit", icon: <VideoCallIcon /> },
// ];

// const mobilePages = [
//   {
//     name: "Find Doctor - Book an appointment",
//     path: "/finddoctor",
//     icon: <PersonSearchIcon />,
//   },
//   {
//     name: "Video Consult - Consult top doctors",
//     path: "/videoconsult",
//     icon: <VideoCallIcon />,
//   },
//   {
//     name: "Surgeries - Expert Surgical Care",
//     path: "/surgeries",
//     icon: <LocalHospitalIcon />,
//   },
//   {
//     name: "View Medical Records",
//     path: "/viewmedicalrecords",
//     icon: <FolderSharedIcon />,
//   },
//   { name: "ABDM", path: "/abdm", icon: <MedicalInformationIcon /> },
//   { name: "About Us", path: "/aboutus", icon: <InfoIcon /> },
//   { name: "Contact Us", path: "/contactus", icon: <ContactMailIcon /> },
//   { name: "Terms of Service", path: "/termsofservice", icon: <GavelIcon /> },
// ];

// const rightButtons = [
//   { name: "Login", path: "/login" },
//   { name: "Book Appointment", path: "/book-appointment" },
// ];

// function ResponsiveAppBar() {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleOpenDrawer = () => {
//     setDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setDrawerOpen(false);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#00bfff" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: 700,
//               letterSpacing: ".1rem",
//               color: "#00bfff",
//               textDecoration: "none",
//               fontSize: "1.5rem",
//               transition: "color 0.3s",
//               "&:hover": {
//                 color: "#1d9bf0",
//               },
//             }}
//           >
//             <div>
//               <img
//                 src={medscraftlogo}
//                 alt="Description of image"
//                 className="weblogo"
//               />
//               <h6><span style={{fontSize:"22px",
//                 fontFamily: 'Lato, sans-serif',
//                 color:"#13a7e7",
//                 fontWeight:"800"}}>Med</span>
//                 <span style={{fontSize:"22px",
//                 fontFamily: 'Lato, sans-serif',
//                 color:"#dd6f8c",
//                 fontWeight:"800"}}>scraft</span></h6>
//             </div>
//           </Typography>

//           {/* Mobile Menu Icon */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenDrawer}
//             >
//               <MenuIcon sx={{ color: "white" }} />
//             </IconButton>

//             {/* Mobile Drawer Menu */}
//             <Drawer
//               anchor="left"
//               open={drawerOpen}
//               onClose={handleCloseDrawer}
//               sx={{
//                 "& .MuiDrawer-paper": {
//                   width: "100%",
//                   backgroundColor: "white",
//                   color: "red",
//                   padding: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                 },
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <PersonIcon sx={{ color: "#1a76d1", mr: 1 }} /> {/* Add icon */}
//                 <Typography variant="h6" sx={{ color: "#1a76d1" }}>
//                   Hi Guest
//                 </Typography>
//                 <IconButton
//                   onClick={handleCloseDrawer}
//                   sx={{ color: "#1a76d1", ml: "auto" }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </Box>
//               <Divider sx={{ bgcolor: "#444" }} />
//               <List>
//                 {mobilePages.map((page) => (
//                   <ListItem button key={page.name} onClick={handleCloseDrawer}>
//                     <ListItemText>
//                       <Link
//                         to={page.path}
//                         style={{
//                           textDecoration: "none",
//                           color: "#1a76d1",
//                           display: "flex",
//                           alignItems: "center",
//                           transition: "color 0.3s",
//                         }}
//                         onMouseEnter={(e) =>
//                           (e.currentTarget.style.color = "#1d9bf0")
//                         }
//                         onMouseLeave={(e) =>
//                           (e.currentTarget.style.color = "#fff")
//                         }
//                       >
//                         {page.icon}
//                         <Box sx={{ ml: 1 }}>{page.name}</Box>
//                       </Link>
//                     </ListItemText>
//                   </ListItem>
//                 ))}
//               </List>
//               <Divider sx={{ bgcolor: "#444" }} />
//               <List
//                 sx={{
//                   width: "100%", // or specify a fixed width like '250px'
//                   maxWidth: 360,
//                 }}
//               >
//                 {rightButtons.map((button) => (
//                   <ListItem
//                     button
//                     key={button.name}
//                     onClick={handleCloseDrawer}
//                   >
//                     <ListItemText>
//                       <Link
//                         to={button.path}
//                         style={{
//                           textDecoration: "none",
//                           backgroundColor: "#1a76d1",
//                           display: "block",
//                           width: "100%",
//                           padding: "10px",
//                           color: "white",
//                         }}
//                       >
//                         {button.name}
//                       </Link>
//                     </ListItemText>
//                   </ListItem>
//                 ))}
//               </List>
//             </Drawer>
//           </Box>

//           {/* Mobile Logo */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: 700,
//               letterSpacing: ".1rem",
//               color: "aliceblue",
//               textDecoration: "none",
//               fontSize: "1.2rem",
//               transition: "color 0.3s",
//               "&:hover": {
//                 color: "black",
//               },
//             }}
//           >
//             <img
//               src={medscraftlogo}
//               alt="medscraft logo"
//               className="medscraftlogo"
//             />{" "}
//             <p className="logop">Medscraft</p>
//           </Typography>

//           {/* Desktop Menu */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center",
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 component={Link}
//                 to={page.path}
//                 sx={{
//                   my: 2,
//                   mx: 1.5,
//                   color: "white",
//                   display: "flex",
//                   alignItems: "center",
//                   textTransform: "none",
//                   fontWeight: 500,
//                   fontFamily: "Poppins, sans-serif",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                   "&:hover": {
//                     backgroundColor: "aliceblue",
//                     color: "#1a76d1",
//                     borderRadius: "10px",
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 {page.icon}
//                 <Box sx={{ ml: 1 }}>{page.name}</Box>
//               </Button>
//             ))}
//           </Box>

//           {/* Desktop Right Buttons */}
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             {rightButtons.map((button) => (
//               <Button
//                 key={button.name}
//                 component={Link}
//                 to={button.path}
//                 sx={{
//                   my: 2,
//                   mx: 1.5,
//                   color: "#1a76d1 !important",
//                   backgroundColor: button.name === "Login" ? "aliceblue" : "aliceblue",
//                   display: "block",
//                   textTransform: "none",
//                   fontWeight: 500,
//                   fontFamily: "Poppins, sans-serif",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                   "&:hover": {
//                     backgroundColor: button.name === "Login" ? "white" : "white",
//                     color: "#fff",
//                     borderRadius: "10px",
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 {button.name}
//               </Button>
//             ))}
//           </Box>

//           {/* Mobile Right Side Button */}
//           <Box sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}>
//             <Button
//               sx={{
//                 color: "#fff",
//                 backgroundColor: "#1a76d1",
//                 borderColor: "#1a76d1",
//                 border: "1px solid",
//                 textTransform: "none",
//                 fontWeight: 500,
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: "0.9rem",
//                 transition: "all 0.3s",
//                 "&:hover": {
//                   borderColor: "#00bfff",
//                   backgroundColor: "aliceblue",
//                   color: "#3874cb",
//                   borderRadius: "10px",
//                 },
//               }}
//               variant="outlined"
//               // onClick={() => alert("Button clicked")}
//             >
//               <Link to="/login" className="button-link">
//                 Login/Signup
//               </Link>
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

