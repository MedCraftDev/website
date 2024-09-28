// import React from "react";
// import "../../assets/css/admin_header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// // import logo from "../../assets/img/images/logo.png";
// import { Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';

// const Admin_Header = () => {
//     const navigate = useNavigate();
//     // const [menuOpen, setMenuOpen] = useState(false);

//     const isLoggedIn = localStorage.getItem("token") && localStorage.getItem("customUserId");

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("customUserId");
//         navigate("/admin-dashboard");
//     };

//     // const toggleMenu = () => {
//     //     setMenuOpen(!menuOpen);
//     // };

//     return (
//         <header className="new-header">
//             <div className="logo">
//                 <Link to="/">
//                     <h1 className="logo">MEDSCRAFT</h1>
//                 </Link>
//             </div>
//             {/* <div className="menu-icon" onClick={toggleMenu}>
//         {menuOpen ? <CloseIcon /> : <MenuIcon />}
//       </div> */}
//             {/* <div className={`menu ${menuOpen ? "open" : ""}`}>
//         <nav className="navigation">
//           <ul className="nav menu">
//             <li>
//               <a className="menu-link" href="/home-visit">Home visit</a>
//             </li>
//             <li>
//               <a className="menu-link" href="/find-doctor">Find Doctor</a>
//             </li>
//             <li>
//               <a className="menu-link" href="/clinic-on-boarding">Clinic On-Boarding</a>
//             </li>
//             <li>
//               <a className="menu-link" href="/virtual-visit">Virtual Visit</a>
//             </li>
//           </ul>
//         </nav>
//       </div> */}
//             <div className="buttons">
//                 <div className="button-group">
//                     {isLoggedIn ? (
//                         <>
//                             <Link to="/login" className="button-link">
//                                 <Button
//                                     variant="contained"
//                                     onClick={handleLogout}
//                                     className="custom-button"
//                                 >
//                                     Admin Logout
//                                 </Button>
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/login" className="button-link">
//                                 <Button
//                                     variant="contained"
//                                     className="custom-button"
//                                 >
//                                     Patient Login
//                                 </Button>
//                             </Link>
//                             <Link to="/bookappointment" className="button-link">
//                                 <Button
//                                     variant="contained"
//                                     className="custom-button"
//                                 >
//                                     Book Appointment
//                                 </Button>
//                             </Link>
//                             <Link to="/loginadmin" className="button-link">
//                                 <Button
//                                     variant="outlined"
//                                     // variant="contained"
//                                     className="custom-button"
//                                 >
//                                     Admin Login
//                                 </Button>
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </header >
//     );
// };

// export default Admin_Header;
