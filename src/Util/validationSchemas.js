import * as yup from "yup";

// export const schema = yup.object().shape({
//   name: yup.string()
//     .required("Name is required")
// .min(2, "Name must be at least 2 characters long")
// .max(50, "Name cannot be longer than 50 characters"),
//   mobile: yup.string()
//     .required("Mobile number is required")
//     .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
//   email: yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup.string()
//     .required("Password is required")
// });
export const addDoctorValidationSchema = yup.object({
  firstName: yup.string().required('First Name is required').min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  lastName: yup.string().required('Last Name is required').min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  email: yup.string().email('Invalid email format').required('Email is required'),
  mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
  profession: yup.object().required('Profession is required'),
  address: yup.string().required('Address is required'),
  city: yup.object().required('City is required'),
  country: yup.object().required('Country is required'),
  feePerVisit: yup.number().typeError('This field is required').required('Fee Per Visit is required').min(1, 'At least 1 is required'),
  timings: yup.string().required('Timings are required'),
  experience: yup.number().typeError('This field is required').required('Experience is required').min(1, 'At least 1 year is required'),
});



export const addPatientValidationSchema = yup.object({
  firstName: yup.string().required('First Name is required').min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  lastName: yup.string().required('Last Name is required').min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  userName: yup.string().min(2, "Name must be at least 2 characters long")
    .max(15, "Name cannot be longer than 15 characters"),
  mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});


// export const addClinicValidationSchema = yup.object().shape({
//   clinicName: yup.string()
//     .required('Clinic Name is required')
//     .min(2, 'Clinic Name must be at least 2 characters'),
//   clinicAddress: yup.string()
//     .required('Clinic Address is required')
//     .min(5, 'Clinic Address must be at least 5 characters'),
//   city: yup.object()
//     .required('City is required')
//     .nullable(),
//   state: yup.object()
//     .required('State is required')
//     .nullable(),
//   postalCode: yup.string()
//     .required('Postal Code is required')
//     .matches(/^[0-9]{5,6}$/, 'Postal Code must be 5 or 6 digits'),
//   contactNumber: yup.string()
//     .required('Contact Number is required')
//     .matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
//   emailAddress: yup.string()
//     .required('Email Address is required')
//     .email('Email Address must be a valid email'),
//   websiteURL: yup.string()
//     .required('Website URL is required')
//     .url('Website URL must be a valid URL'),
//   clinicDescription: yup.string()
//     .required('Clinic Description is required')
//     .min(10, 'Clinic Description must be at least 10 characters'),
//   clinicSpecialties: yup.array()
//     .required('Clinic Specialties are required')
//     .min(1, 'At least one specialty is required'),
//   servicesProvided: yup.string()
//     .required('Services Provided is required')
//     .min(5, 'Services Provided must be at least 5 characters'),
//   operatingHours: yup.string()
//     .required('Operating Hours are required')
//     .min(5, 'Operating Hours must be at least 5 characters'),
//   numberOfDoctors: yup.number()
//     .typeError('This field is required')
//     .required('Number of Doctors is required')
//     .min(1, 'At least one doctor is required'),
//   numberOfNurses: yup.number()
//     .typeError('This field is required')
//     .required('Number of Nurses is required')
//     .min(1, 'At least one nurse is required'),
//   numberOfAdministrativeStaff: yup.number()
//     .typeError('This field is required')
//     .required('Number of Administrative Staff is required')
//     .min(1, 'At least one administrative staff is required'),
//   insuranceAccepted: yup.string()
//     .required('Insurance Accepted is required')
//     .min(5, 'Insurance Accepted must be at least 5 characters'),
//   accreditations: yup.string()
//     .required('Accreditations are required')
//     .min(5, 'Accreditations must be at least 5 characters'),
//   affiliations: yup.string()
//     .required('Affiliations are required')
//     .min(5, 'Affiliations must be at least 5 characters'),
//   registrationNumber: yup.string()
//     .required('Registration Number is required')
//     .min(5, 'Registration Number must be at least 5 characters'),
//   licenseNumber: yup.string()
//     .required('License Number is required')
//     .min(5, 'License Number must be at least 5 characters'),
//   dateOfEstablishment: yup.date()
//     .required('Date of Establishment is required'),
//   contactPersonName: yup.string()
//     .required('Contact Person Name is required')
//     .min(2, 'Contact Person Name must be at least 2 characters'),
//   contactPersonDesignation: yup.string()
//     .required('Contact Person Designation is required')
//     .min(2, 'Contact Person Designation must be at least 2 characters'),
//   contactPersonPhoneNumber: yup.string()
//     .required('Contact Person Phone Number is required')
//     .matches(/^[0-9]{10}$/, 'Contact Person Phone Number must be 10 digits'),
//   contactPersonEmailAddress: yup.string()
//     .required('Contact Person Email Address is required')
//     .email('Contact Person Email Address must be a valid email'),
//   parkingAvailability: yup.string()
//     .required('Parking Availability is required')
//     .oneOf(['Yes', 'No'], 'Invalid Parking Availability'),
//   wheelchairAccessibility: yup.string()
//     .required('Wheelchair Accessibility is required')
//     .oneOf(['Yes', 'No'], 'Invalid Wheelchair Accessibility'),
//   onlineAppointmentBooking: yup.string()
//     .required('Online Appointment Booking is required')
//     .oneOf(['Yes', 'No'], 'Invalid Online Appointment Booking'),
// });



export const addClinicValidationSchema = yup.object().shape({
  clinicName: yup.string()
    .required('Clinic Name is required'),
    // .min(2, 'Clinic Name must be at least 2 characters'),
  clinicAddress: yup.string()
    .required('Clinic Address is required'),
    // .min(5, 'Clinic Address must be at least 5 characters'),
  contactNumber: yup.string()
    .required('Contact Number is required'),
    // .matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
  emailAddress: yup.string()
    .required('Email Address is required')
    .email('Email Address must be a valid email'),
});