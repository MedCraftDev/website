// import React from 'react';
// import { Container, Grid, Paper, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import Carousel from 'react-material-ui-carousel';

// const testimonials = [
//   {
//     name: "Sneha Sharma",
//     description: "I have been using MedsCraft Healthcare for my clinic for the past six months, and I must say it has completely transformed the way we manage patient records. The integration with AConnect is seamless."
//   },
//   {
//     name: "Rahul Patel",
//     description: "As a busy physician, I rely on technology to help me efficiently manage my practice, and MedsCraft Healthcare has exceeded my expectations. With its robust features and comprehensive support for M1, M2, and M3 standards."
//   },
//   {
//     name: "Priya Singh",
//     description: "MedsCraft Healthcare has been a game-changer for our hospital. The platform's digital patient record management system has allowed us to transition seamlessly from paper-based records to a fully integrated digital solution."
//   },
//   {
//     name: "Amit Gupta",
//     description: "I've been using MedsCraft Healthcare for my small clinic for the past year, and I couldn't be happier with the results. The platform's ability to integrate with various standards like M1, M2, and M3 has made it incredibly versatile and adaptable to our needs."
//   }
// ];

// const SectionTitle = styled('div')({
//   marginTop: '30px',
// });

// const CustomPaper = styled(Paper)(({ theme }) => ({
//   padding: '20px',
//   margin: '10px',
//   [theme.breakpoints.down('xs')]: {
//     padding: '0',
//     margin: '0',
//   },
// }));

// const CustomContainer = styled(Container)(({ theme }) => ({
//   paddingLeft: '0px',
//   paddingRight: '0px',
//   [theme.breakpoints.down('xs')]: {
//     paddingLeft: '0 !important',
//     paddingRight: '0 !important',
//   },
// }));

// const CustomGridItem = styled(Grid)(({ theme }) => ({
//   paddingLeft: '0px',
//   paddingRight: '0px',
//   [theme.breakpoints.down('xs')]: {
//     paddingLeft: '0',
//     paddingRight: '0',
//   },
// }));

// const TestimonialCarousel = () => {
//   return (
//     <SectionTitle>
//       <div className="section-title">
//         <h2>What Clients Say</h2>
//       </div>
//       <CustomContainer>
//         <Grid container justifyContent="center">
//           <CustomGridItem item xs={12} md={10}>
//             <Carousel
//               autoPlay={true}
//               animation="fade"
//               indicators={true}
//               timeout={500}
//               navButtonsAlwaysVisible={true}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <CustomPaper key={index}>
//                   <Typography variant="h5" component="h3" gutterBottom>
//                     {testimonial.name}
//                   </Typography>
//                   <Typography variant="body1">
//                     {testimonial.description}
//                   </Typography>
//                 </CustomPaper>
//               ))}
//             </Carousel>
//           </CustomGridItem>
//         </Grid>
//       </CustomContainer>
//     </SectionTitle>
//   );
// };

// export default TestimonialCarousel;
// src/components/Medscraft/WhatClientSay.js
// src/components/Medscraft/WhatClientSay.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const testimonials = [
    {
        content: "I have been using MedsCraft Healthcare for my clinic for the past six months, and I must say it has completely transformed the way we manage patient records. The integration with AConnect is seamless.",
        name: "Sneha Sharma"
    },
    {
        content: "As a busy physician, I rely on technology to help me efficiently manage my practice, and MedsCraft Healthcare has exceeded my expectations. With its robust features and comprehensive support for M1, M2, and M3 standards.",
        name: "Rahul Patel"
    },
    {
        content: "MedsCraft Healthcare has been a game-changer for our hospital. The platform's digital patient record management system has allowed us to transition seamlessly from paper-based records to a fully integrated digital solution.",
        name: "Priya Singh"
    },
    {
      content: "I've been using MedsCraft Healthcare for my small clinic for the past year, and I couldn't be happier with the results. The platform's ability to integrate with various standards like M1, M2, and M3 has made it incredibly versatile and adaptable to our needs.",
      name: "Priya Singh"
  }
];

const WhatClientSay = () => (
    <div className="container clientcontainer">
        <div className="row" style={{justifyContent:"center"}}>
            <div className="col-md-offset-2 col-md-8">
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    interval={4000}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <div >
                                {/* <img src={testimonial.img} alt={testimonial.name} /> */}
                            </div>
                            <div className="testimonial-content">
                                <p>{testimonial.content}</p>
                            </div>
                            <h3 className="testimonial-title">
                                <a href="#">{testimonial.name}</a>
                                <small> - {testimonial.role}</small>
                            </h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
);

export default WhatClientSay;
