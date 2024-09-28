import React, { useState } from "react";
import {
  login02,
  loginicon01,
  loginicon02,
  loginicon03,
  medscraftLogo
} from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from '@tanstack/react-query';
import { ADD_PATIENT_URL } from '../../../Util/const';
import { patientPostRequest } from "../../../Util/fetchPatientUtil";
import { addPatientValidationSchema } from "../../../Util/validationSchemas";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(addPatientValidationSchema)
  });

  const mutation = useMutation({
    mutationFn: (data) => patientPostRequest(ADD_PATIENT_URL, data),
    onSuccess: () => {
      reset();
      navigate('/login'); // Redirect to login page after successful signup
    },
    onError: (error) => {
      console.error('Error submitting form', error);
    },
  });

  const onSubmit = async (data) => {
    const formattedData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      mobile: data.mobile
    };
    await mutation.mutateAsync(formattedData);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img className="img-fluid" src={login02} alt="Logo" />
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
                        {/* <Link to="/">
                          <h1 className="medscraft-logo">MEDSCRAFT</h1>
                        </Link> */}
                         <Link to="/admin-dashboard" className="logo">
                          <img src={medscraftLogo} width={40} height={40} alt="" />{" "}
                          <span style={{ width: "100px" , height: "25px"}}>Medscraft</span>
                        </Link>
                      </div>
                      <h2>Getting Started</h2>
                      {/* Form */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <label>
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            {...register('firstName')}
                          />
                          {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                        </div>
                        <div className="form-group">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            {...register('lastName')}
                          />
                          {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                        </div>
                        <div className="form-group">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            {...register('mobile')}
                          />
                          {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
                        </div>
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            autoComplete="username"
                            {...register('email')}
                          />
                          {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="form-control pass-input"
                            autoComplete="new-password"
                            {...register('password')}
                          />
                          <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                          {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <div className="form-group">
                          <label>
                            Confirm Password <span className="login-danger">*</span>
                          </label>
                          <input
                            type={passwordVisible1 ? 'text' : 'password'}
                            className="form-control pass-input"
                            autoComplete="new-password"
                            {...register('confirmPassword')}
                          />
                          <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility1}
                          >
                            {passwordVisible1 ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                          {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              I agree to the
                              <Link to="#">&nbsp; terms of service </Link>
                              &nbsp; and
                              <Link to="#">&nbsp; privacy policy </Link>
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <div className="form-group login-btn">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          Already have an account? <Link to="/login">Login</Link>
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
    </div>
  );
};

export default Signup;
