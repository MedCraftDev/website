// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Snackbar, Alert } from "@mui/material";
// import { login02, loginicon01, loginicon02, loginicon03, medscraftLogo } from "../../imagepath";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import "bootstrap/dist/css/bootstrap.min.css";

// const schema = yup.object().shape({
//   email: yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup.string()
//     .required("Password is required")
// });

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async (data) => {
//     try {
//       const response = await fetch("http://localhost:8000/api/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });

//       const result = await response.json();

//       if (response.status === 201) {
//         setAlert({ open: true, message: "Login successful!", severity: "success" });

//         localStorage.setItem("token", result?.jwtTokent);
//         localStorage.setItem("customUserId", result.existUser?._id)
//         // history.push("/admin-dashboard")
//         setTimeout(() => {
//           navigate("/admin-dashboard");
//         }, 1500);
//       } else {
//         throw new Error(result.message || "Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setAlert({ open: true, message: error.message, severity: "error" });
//     }
//   };

//   const handleAlertClose = () => {
//     setAlert({ ...alert, open: false });
//   };

//   return (
//     <>
//       <div className="main-wrapper login-body">
//         <div className="container-fluid px-0">
//           <div className="row">
//             <div className="col-lg-6 login-wrap">
//               <div className="login-sec">
//                 <div className="log-img">
//                   <img className="img-fluid" src={login02} alt="#" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 login-wrap-bg">
//               <div className="login-wrapper">
//                 <div className="loginbox">
//                   <div className="login-right">
//                     <div className="login-right-wrap">
//                       <div className="account-logo">
//                         {/* <Link to="/admin-dashboard">
//                           <img src={loginlogo} alt="#" />
//                         </Link> */}
//                         {/* <Link to="/">
//                           <h1 className="medscraft-logo">MEDSCRAFT</h1>
//                         </Link> */}
//                         <Link to="/admin-dashboard" className="logo">
//                           <img src={medscraftLogo} width={40} height={40} alt="" />{" "}
//                           <span style={{ width: "100px" , height: "25px"}}>Medscraft</span>
//                         </Link>
//                       </div>
//                       <h2>Login</h2>
//                       <form onSubmit={handleSubmit(handleLogin)} noValidate>
//                         <div className="form-group">
//                           <label>Email <span className="login-danger">*</span></label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             {...register("email")}
//                             placeholder="name@example.com"
//                             required
//                           />
//                           {errors.email && <p className="text-danger">{errors.email.message}</p>}
//                         </div>
//                         <div className="form-group">
//                           <label>Password <span className="login-danger">*</span></label>
//                           <input
//                             type={passwordVisible ? "text" : "password"}
//                             className="form-control pass-input"
//                             {...register("password")}
//                             required
//                           />
//                           {errors.password && <p className="text-danger">{errors.password.message}</p>}
//                           <span className="toggle-password" onClick={togglePasswordVisibility}>
//                             {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
//                           </span>
//                         </div>
//                         <div className="forgotpass">
//                           {/* <div className="remember-me">
//                             <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
//                               {" "}Remember me
//                               <input type="checkbox" name="radio" />
//                               <span className="checkmark" />
//                             </label>
//                           </div> */}
//                           <Link to="/forgotpassword">Forgot Password?</Link>
//                         </div>
//                         <div className="form-group login-btn">
//                           <button type="submit" className="btn btn-primary btn-block">Login</button>
//                         </div>
//                       </form>
//                       <div className="next-sign">
//                         <p className="account-subtitle">Need an account? <Link to="/signup">Sign Up</Link></p>
//                         <div className="social-login">
//                           <Link to="#"><img src={loginicon01} alt="#" /></Link>
//                           <Link to="#"><img src={loginicon02} alt="#" /></Link>
//                           <Link to="#"><img src={loginicon03} alt="#" /></Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Snackbar
//         open={alert.open}
//         autoHideDuration={4000}
//         onClose={handleAlertClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Alert onClose={handleAlertClose} severity={alert.severity} sx={{ width: '100%' }}>
//           {alert.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default Login;



import React from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import { login02, loginicon01, loginicon02, loginicon03, medscraftLogo } from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";

import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";

// import ReactPasswordToggleIcon from 'react-password-toggle-icon';



const Login = () => {


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  // let inputRef = useRef();
  // const showIcon = () => <i className="feather feather-eye" aria-hidden="true">
  //   <FeatherIcon icon="eye" />
  // </i>;
  // const hideIcon = () => <i className="feather feather-eye-slash" aria-hidden="true">
  //   <FeatherIcon icon="eye-off" />
  // </i>
  return (
    <>

      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img
                    className="img-fluid"
                    src={login02}
                    alt="#"
                  />
                </div>
              </div>
            </div>
            {/* /Login logo */}
            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        {/* <Link to="/admin-dashboard">
                          <img src={loginlogo} alt="#" />
                        </Link> */}
                        <Link to="/admin-dashboard" className="logo">
                          <img src={medscraftLogo} width={40} height={40} alt="" />{" "}
                          <span style={{ width: "100px" , height: "25px"}}>Medscraft</span>
                        </Link>
                      </div>
                      <h2>Login</h2>
                      {/* Form */}
                      <form >
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                            type={passwordVisible ? 'password' : ''}
                            className="form-control pass-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                        </div>
                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              Remember me
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                        <div className="form-group login-btn">
                          <Link to="/admin-dashboard"
                            className="btn btn-primary btn-block"
                          >
                            Login
                          </Link>
                           {/* <button type="submit" className="btn btn-primary btn-block">Login</button> */}
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          Need an account? <Link to="/signup">Sign Up</Link>
                        </p>
                        {/* Social Login */}
                        <div className="social-login">
                          <Link to="#">
                            <img src={loginicon01} alt="#" />
                          </Link>
                          <Link to="#">
                            <img src={loginicon02} alt="#" />
                          </Link>
                          <Link to="#">
                            <img src={loginicon03} alt="#" />
                          </Link>
                        </div>
                        {/* /Social Login */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
