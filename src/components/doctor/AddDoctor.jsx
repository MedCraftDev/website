// import React, { useState } from "react";
// import Admin_Header from "../Medscraft/Admin_Header";
// import Sidebar from "../Sidebar";
// import Select from "react-select";
// import { Link } from 'react-router-dom';
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ADD_DOCTOR_URL } from '../../Util/const';
// import { postRequest } from "../../Util/fetchDoctorUtil";
// import { addDoctorValidationSchema } from "../../Util/validationSchemas";

// // eslint-disable-next-line react/prop-types
// const AddDoctor = ({ onDoctorAdded }) => {

//   const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
//     resolver: yupResolver(addDoctorValidationSchema)
//   });

//   const [cities] = useState([
//     { value: "Mumbai", label: "Mumbai" },
//     { value: "Delhi", label: "Delhi" },
//     { value: "Bangalore", label: "Bangalore" },
//     { value: "Hyderabad", label: "Hyderabad" },
//     { value: "Ahmedabad", label: "Ahmedabad" },
//     { value: "Chennai", label: "Chennai" },
//     { value: "Kolkata", label: "Kolkata" },
//     { value: "Surat", label: "Surat" },
//     { value: "Pune", label: "Pune" },
//     { value: "Jaipur", label: "Jaipur" },
//     { value: "Lucknow", label: "Lucknow" },
//     { value: "Kanpur", label: "Kanpur" },
//     { value: "Nagpur", label: "Nagpur" },
//     { value: "Indore", label: "Indore" },
//     { value: "Thane", label: "Thane" },
//     { value: "Bhopal", label: "Bhopal" },
//     { value: "Visakhapatnam", label: "Visakhapatnam" },
//     { value: "Patna", label: "Patna" },
//     { value: "Vadodara", label: "Vadodara" },
//     { value: "Ghaziabad", label: "Ghaziabad" },
//     { value: "Gurugram", label: "Gurugram" },
//     { value: "Noida", label: "Noida" },
//     { value: "Jabalpur", label: "Jabalpur" },
//     { value: "Bhopal", label: "Bhopal" },
//     { value: "Indore", label: "Indore" }
//   ]);

//   const [states] = useState([
//     { value: "Andhra Pradesh", label: "Andhra Pradesh" },
//     { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
//     { value: "Assam", label: "Assam" },
//     { value: "Bihar", label: "Bihar" },
//     { value: "Chhattisgarh", label: "Chhattisgarh" },
//     { value: "Goa", label: "Goa" },
//     { value: "Gujarat", label: "Gujarat" },
//     { value: "Haryana", label: "Haryana" },
//     { value: "Himachal Pradesh", label: "Himachal Pradesh" },
//     { value: "Jharkhand", label: "Jharkhand" },
//     { value: "Karnataka", label: "Karnataka" },
//     { value: "Kerala", label: "Kerala" },
//     { value: "Madhya Pradesh", label: "Madhya Pradesh" },
//     { value: "Maharashtra", label: "Maharashtra" },
//     { value: "Manipur", label: "Manipur" },
//     { value: "Meghalaya", label: "Meghalaya" },
//     { value: "Mizoram", label: "Mizoram" },
//     { value: "Nagaland", label: "Nagaland" },
//     { value: "Odisha", label: "Odisha" },
//     { value: "Punjab", label: "Punjab" },
//     { value: "Rajasthan", label: "Rajasthan" },
//     { value: "Sikkim", label: "Sikkim" },
//     { value: "Tamil Nadu", label: "Tamil Nadu" },
//     { value: "Telangana", label: "Telangana" },
//     { value: "Tripura", label: "Tripura" },
//     { value: "Uttar Pradesh", label: "Uttar Pradesh" },
//     { value: "Uttarakhand", label: "Uttarakhand" },
//     { value: "West Bengal", label: "West Bengal" },
//     { value: "Chandigarh", label: "Chandigarh" },
//     { value: "Delhi", label: "Delhi" },
//     { value: "Lakshadweep", label: "Lakshadweep" },
//     { value: "Puducherry", label: "Puducherry" },
//   ]);


//   //   const [departments] = useState([
//   //     { value: "Cardiology", label: "Cardiology" },
//   //     { value: "Orthopedics", label: "Orthopedics" },
//   //     { value: "Radiology", label: "Radiology" },
//   //     { value: "Dentistry", label: "Dentistry" },
//   //     { value: "Neurology", label: "Neurology" },
//   //     { value: "Gastroenterology", label: "Gastroenterology" },
//   //     { value: "Dermatology", label: "Dermatology" },
//   //     { value: "Pediatrics", label: "Pediatrics" },
//   //     { value: "Gynecology", label: "Gynecology" },
//   //     { value: "Oncology", label: "Oncology" },
//   //     { value: "Nephrology", label: "Nephrology" },
//   //     { value: "Urology", label: "Urology" },
//   //     { value: "Ophthalmology", label: "Ophthalmology" },
//   //     { value: "Pulmonology", label: "Pulmonology" },
//   //     { value: "Psychiatry", label: "Psychiatry" },
//   //     { value: "Endocrinology", label: "Endocrinology" },
//   //     { value: "Rheumatology", label: "Rheumatology" },
//   //     { value: "Hematology", label: "Hematology" },
//   //     { value: "Immunology", label: "Immunology" },
//   //     { value: "Emergency Medicine", label: "Emergency Medicine" }
//   // ]);

//   const [professions] = useState([
//     { value: "Surgeon", label: "Surgeon" },
//     { value: "Pediatrician", label: "Pediatrician" },
//     { value: "General Practitioner", label: "General Practitioner" },
//     { value: "Cardiologist", label: "Cardiologist" },
//     { value: "Orthopedic Surgeon", label: "Orthopedic Surgeon" },
//     { value: "Radiologist", label: "Radiologist" },
//     { value: "Dentist", label: "Dentist" },
//     { value: "Neurologist", label: "Neurologist" },
//     { value: "Gastroenterologist", label: "Gastroenterologist" },
//     { value: "Dermatologist", label: "Dermatologist" },
//     { value: "Gynecologist", label: "Gynecologist" },
//     { value: "Oncologist", label: "Oncologist" },
//     { value: "Nephrologist", label: "Nephrologist" },
//     { value: "Urologist", label: "Urologist" },
//     { value: "Ophthalmologist", label: "Ophthalmologist" },
//     { value: "Pulmonologist", label: "Pulmonologist" },
//     { value: "Psychiatrist", label: "Psychiatrist" },
//     { value: "Endocrinologist", label: "Endocrinologist" },
//     { value: "Rheumatologist", label: "Rheumatologist" },
//     { value: "Hematologist", label: "Hematologist" }
//   ]);


//   const onSubmit = async (data) => {
//     const formattedData = {
//       ...data,
//       // department: data.department.value,
//       profession: data.profession.value,
//       address: {
//         city: data.city.value,
//         country: data.country.value,
//         street: data.address
//       }
//     };
//     console.log('Form data:', formattedData);
//     try {
//       const response = await postRequest(ADD_DOCTOR_URL, formattedData);
//       if (response.status === 201) {
//         onDoctorAdded(response.data);

//       }
//       reset({
//         firstName: '',
//         lastName: '',
//         email: '',
//         mobile: '',
//         // department: null,
//         profession: null,
//         address: '',
//         city: null,
//         country: null,
//         feePerVisit: '',
//         // from: '',
//         timings: '',
//         // userId: '',
//         experience: '',
//       });
//       // navigate('/doctorlist');
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//     }
//   };

//   return (
//     <div>
//       <Admin_Header />
//       <Sidebar id="menu-item1" id1="menu-items1" activeClassName="add-doctor" />
//       <div className="page-wrapper">
//         <div className="content">
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="#">Doctors </Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <i className="feather-chevron-right">
//                       <FeatherIcon icon="chevron-right" />
//                     </i>
//                   </li>
//                   <li className="breadcrumb-item active">Add Doctor</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="card">
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="row">
//                       <div className="col-12">
//                         <div className="form-heading">
//                           <h4>Doctor Details</h4>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             First Name <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="firstName"
//                             {...register('firstName')}
//                             placeholder=""
//                           />
//                           {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Last Name <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="lastName"
//                             {...register('lastName')}
//                             placeholder=""
//                           />
//                           {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Mobile <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="mobile"
//                             {...register('mobile')}
//                             placeholder=""
//                           />
//                           {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Email <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="email"
//                             name="email"
//                             {...register('email')}
//                             placeholder=""
//                           />
//                           {errors.email && <p className="text-danger">{errors.email.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Speciality <span className="login-danger">*</span>
//                           </label>
//                           <Controller
//                             name="profession"
//                             control={control}
//                             render={({ field }) => (
//                               <Select
//                                 {...field}
//                                 options={professions}
//                                 placeholder=""
//                                 menuPortalTarget={document.body}
//                                 styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                                 components={{ IndicatorSeparator: () => null }}
//                                 // eslint-disable-next-line react/jsx-no-duplicate-props
//                                 styles={{
//                                   control: (baseStyles, state) => ({
//                                     ...baseStyles,
//                                     borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                     boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                     '&:hover': {
//                                       borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                     },
//                                     borderRadius: '10px',
//                                     fontSize: "14px",
//                                     minHeight: "45px",
//                                   }),
//                                   dropdownIndicator: (base, state) => ({
//                                     ...base,
//                                     transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                     transition: '250ms',
//                                     width: '35px',
//                                     height: '35px',
//                                   }),
//                                 }}
//                               />
//                             )}
//                           />
//                           {errors.profession && <p className="text-danger">{errors.profession.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             Experience (years) <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="number"
//                             name="experience"
//                             {...register('experience')}
//                           />
//                           {errors.experience && <p className="text-danger">{errors.experience.message}</p>}
//                         </div>
//                       </div>
//                       {/* <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Department <span className="login-danger">*</span>
//                           </label>
//                           <Controller
//                             name="department"
//                             control={control}
//                             render={({ field }) => (
//                               <Select
//                                 {...field}
//                                 options={departments}
//                                 placeholder=""
//                           menuPortalTarget={document.body}
//                           styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                           components={{ IndicatorSeparator: () => null }}
//                           // eslint-disable-next-line react/jsx-no-duplicate-props
//                           styles={{
//                             control: (baseStyles, state) => ({
//                               ...baseStyles,
//                               borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                               boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                               '&:hover': {
//                                 borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                               },
//                               borderRadius: '10px',
//                               fontSize: "14px",
//                               minHeight: "45px",
//                             }),
//                             dropdownIndicator: (base, state) => ({
//                               ...base,
//                               transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                               transition: '250ms',
//                               width: '35px',
//                               height: '35px',
//                             }),
//                           }}
//                         />
//                       )}
//                     />
//                           {errors.department && <p className="text-danger">{errors.department.message}</p>}
//                         </div>
//                       </div> */}
//                       <div className="col-12 col-sm-12">
//                         <div className="form-group local-forms">
//                           <label>
//                             Clinic Address <span className="login-danger">*</span>
//                           </label>
//                           <textarea
//                             className="form-control"
//                             name="address"
//                             rows={3}
//                             {...register('address')}
//                           />
//                           {errors.address && <p className="text-danger">{errors.address.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             City <span className="login-danger">*</span>
//                           </label>
//                           <Controller
//                             name="city"
//                             control={control}
//                             render={({ field }) => (
//                               <Select
//                                 {...field}
//                                 options={cities}
//                                 placeholder=""
//                                 menuPortalTarget={document.body}
//                                 styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                                 components={{ IndicatorSeparator: () => null }}
//                                 // eslint-disable-next-line react/jsx-no-duplicate-props
//                                 styles={{
//                                   control: (baseStyles, state) => ({
//                                     ...baseStyles,
//                                     borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                     boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                     '&:hover': {
//                                       borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                     },
//                                     borderRadius: '10px',
//                                     fontSize: "14px",
//                                     minHeight: "45px",
//                                   }),
//                                   dropdownIndicator: (base, state) => ({
//                                     ...base,
//                                     transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                     transition: '250ms',
//                                     width: '35px',
//                                     height: '35px',
//                                   }),
//                                 }}
//                               />
//                             )}
//                           />
//                           {errors.city && <p className="text-danger">{errors.city.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             States <span className="login-danger">*</span>
//                           </label>
//                           <Controller
//                             name="country"
//                             control={control}
//                             render={({ field }) => (
//                               <Select
//                                 {...field}
//                                 options={states}
//                                 placeholder=""
//                                 menuPortalTarget={document.body}
//                                 styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                                 components={{ IndicatorSeparator: () => null }}
//                                 // eslint-disable-next-line react/jsx-no-duplicate-props
//                                 styles={{
//                                   control: (baseStyles, state) => ({
//                                     ...baseStyles,
//                                     borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                     boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                     '&:hover': {
//                                       borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                     },
//                                     borderRadius: '10px',
//                                     fontSize: "14px",
//                                     minHeight: "45px",
//                                   }),
//                                   dropdownIndicator: (base, state) => ({
//                                     ...base,
//                                     transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                     transition: '250ms',
//                                     width: '35px',
//                                     height: '35px',
//                                   }),
//                                 }}
//                               />
//                             )}
//                           />
//                           {errors.country && <p className="text-danger">{errors.country.message}</p>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             Fee Per Visit <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="number"
//                             name="feePerVisit"
//                             {...register('feePerVisit')}
//                           />
//                           {errors.feePerVisit && <p className="text-danger">{errors.feePerVisit.message}</p>}
//                         </div>
//                       </div>
//                       {/* <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             From <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="from"
//                             {...register('from')}
//                           />
//                           {errors.from && <p className="text-danger">{errors.from.message}</p>}
//                         </div>
//                       </div> */}
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             Timings <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="timings"
//                             {...register('timings')}
//                           />
//                           {errors.timings && <p className="text-danger">{errors.timings.message}</p>}
//                         </div>
//                       </div>
//                       {/* <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             User ID <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="userId"
//                             {...register('userId')}
//                           />
//                           {errors.userId && <p className="text-danger">{errors.userId.message}</p>}
//                         </div>
//                       </div> */}

//                       <div className="col-12">
//                         <div className="doctor-submit text-end">
//                           <button
//                             type="submit"
//                             className="btn btn-primary submit-form me-2"
//                           >
//                             Submit
//                           </button>
//                           <button
//                             type="button"
//                             className="btn btn-primary cancel-form"
//                             onClick={() => {
//                               reset();
//                             }}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddDoctor;


/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Admin_Header";
import Sidebar from "../Sidebar";
import { DatePicker} from "antd";
import Select from "react-select";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
const AddDoctor = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [option, setOption] = useState([
    { value: 1, label: "Select Country" },
    { value: 2, label: "Usa" },
    { value: 3, label: "Uk" },
    { value: 4, label: "Italy" },
  ]);
  const [statevalue, setStateValue] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);

  const [department, setDepartment] = useState([
    { value: 1, label: "Orthopedics" },
    { value: 2, label: "Radiology" },
    { value: 3, label: "Dentist" },
  ]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  const loadFile = (event) => {
    // Handle file loading logic here
  };

  return (
    <div>
      <Header />
      <Sidebar id="menu-item1" id1="menu-items1" activeClassName="add-doctor" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                     <Link to="#">Doctors </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Add Doctor</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Doctor Details</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              First Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Last Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              User Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Mobile <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Email <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Password <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Confirm Password{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Date Of Birth{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <DatePicker
                              className="form-control datetimepicker"
                              onChange={onChange}
                              suffixIcon={null}
                              style={{
                                borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Gender<span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                Male
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Education <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Designation{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Department <span className="login-danger">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={department}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}
                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                   boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                    minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />

                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Address <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              City <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                   boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                    minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              Country <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={option}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                   boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                    minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />

                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              State/Province{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                   boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                    minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />

                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              Postal Code{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Start Biography{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-top-form">
                            <label className="local-top">
                              Avatar <span className="login-danger">*</span>
                            </label>
                            <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onChange={loadFile}
                                className="hide-input"
                              />
                                <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div>
                            {/* <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onchange="loadFile(event)"
                                className="hide-input"
                              />
                              <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Status <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                Active
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                In Active
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-form me-2"
                            >
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary cancel-form"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
               <Link to="#">See all messages</Link>
              </div>
            </div>
          </div>
        </div>

      </>
    </div>
  );
};

export default AddDoctor;
