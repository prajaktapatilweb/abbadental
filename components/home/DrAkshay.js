import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';



const DrAkshay = () => {

  // Define the fade-up animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
    visible: {
      opacity: 1,
      y: 0,  // Moves up to its original position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeInOut', // Easing function
      },
    },
  };

  // Define the fade-left animation variants
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },  // Start from the left (-100px offset) and slightly below (50px down)
    visible: {
      opacity: 1,
      x: 0,  // Move to original position horizontally
      y: 0,  // Move to original position vertically
      transition: {
        duration: 0.8,  // Duration of the animation
        ease: 'easeInOut',  // Easing function for a smooth motion

      },
    },
  };

  return (
    <>
      <Box id="Doctors" sx={{ py: 8 }}>
        <Container>
          <div class="section-title">
            <h3>Your Dental Experts Await</h3>
            <h2 style={{fontWeight:300,fontSize:20}}>Your Smile is in the Hands of the Best Dentist in Nashik</h2>
          </div>
        </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          sx={{ fontFamily: '"Poppins", sans-serif' }}
        >


          <Grid item xs={12} sm={6} sx={{ p: 1 }}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              <Image
                src="/images/dr/drnikhil2.jpg"
                alt=" Dr. Nikhil Abbad at College Road Dental Clinic"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
                style={{
                  borderTop: '10px  #315fa4 solid',
                  paddingBottom: 3,
                  paddingRight: 3,
                  borderLeft: '10px  #4599df solid',
                  borderBottomLeftRadius: '15px',
                  borderTopRightRadius: '10px',
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              />

            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 3 }}>

                < Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    marginBottom: "5px",
                    fontSize: "30px",
                    color: "primary.dark",
                    textAlign: 'left', mt: 3
                  }}
                >

                  Dr. Nikhil Abbad
                </Typography>
                <span
                  style={{
                    fontSize: "17px",

                    fontWeight: '500',
                  }}
                >
                🏅 M.D.S. Gold Medalist Prosthodontist
                                  </span>


                <Box className="ps"
                  sx={{
                    
                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2

                  }}
                >
                  <Typography>
                  Dr. Nikhil Abbad is a highly accomplished Consultant Prosthodontist with over 8 years of experience, recognized as one of the best dentists in Nashik. Specializing in Crowns, Bridges, and Oral Implants, he has a distinguished educational background with an M.D.S. in Prosthodontics and Oral Implantology.

                  Dr. Nikhil is the founder of Abbad Dental Clinic and Implant Center in Nashik, where he provides expert care in Implant Surgery and Full Mouth Rehabilitation. His professional journey and achievements include:
                  <br />
                  <b>Specialty:</b> Prosthodontics, Crown & Bridge, Oral Implantology<br />
                  <b>Degrees:</b> M.D.S., Modern Dental College, Indore<br />
                  <b>Experience: </b>Over 8 years in advanced prosthodontics and implantology<br />
                  <b>Achievements:</b> Gold Medalist in MDS program; specialized training in Digital Smile Designing (University of Los Angeles)<br />
                  <b>Research: </b>Published articles in international journals; awarded for best paper presentations in implant dentistry<br />
                  <b>Prosthetics Training: </b>Oral and maxillofacial prosthetics at TATA Memorial Hospital, Mumbai<br />
                  <b>Academic Role:</b> Visiting Assistant Professor, SMBT Sangamner<br />
                Dr. Nikhil Abbad is passionate about improving patients' confidence through effective dental treatments. He is a dedicated member of the Indian Dental Association, Nashik Chapter, and remains committed to enhancing global healthcare through his expertise. If you’re searching for a “dentist near me”, your search ends here.
                </Typography>

</Box>
              
                <input type="checkbox" class="check" />

              </Box>
            </motion.div>
          </Grid>



          <Grid item xs={12} sm={6} order={{ xs: 0, md: 1 }} sx={{ p: 1 }}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              <Image
                src="/images/dr/drleena.JPG"
                alt="Dr. Leena Nikhil Abbad at College Road Dental Clinic"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
                style={{
                  borderRight: '10px  #315fa4 solid',
                  paddingTop: 3,
                  paddingLeft: 3,
                  borderBottom: '10px  #4599df solid',
                  borderBottomLeftRadius: '15px',
                  borderTopRightRadius: '10px',
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, md: 0 }}>
            <motion.div
              className="textcontainer"
              variants={fadeLeftVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 3 }}>

                < Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    marginBottom: "5px",
                    fontSize: "30px",
                    color: "primary.dark",
                    textAlign: 'left',
                    mt: 3
                  }}
                >

                  Dr. Leena Abbad
                </Typography>
                <span
                  style={{
                    fontSize: "18px",

                    fontWeight: 500,
                  }}
                >
                  B.D.S, Dental Surgeon
                </span>

                {/* {messages['dashboard.analytics.eddieMassy']} */}
                <Typography className="ps"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2

                  }}
                >
                  Dr. Leena Abbad is a skilled Dental Surgeon with extensive expertise in Endodontics and Restorative Dentistry. Graduating with a B.D.S. from Pravara Institute of Medical Sciences, Loni, she has garnered over 4 years of experience in the field. Dr. Leena is particularly renowned for her proficiency in painless single-sitting root canals and her keen eye for smile correction and design.
                  <br></br>
                  As the co-founder of Abbad Dental Clinic and Implant Center in Nashik, Dr. Leena combines her deep knowledge and technical skills to deliver exceptional dental care, focusing on advanced endodontic procedures and aesthetic enhancements. Her dedication to staying at the forefront of dental innovation is evident from her active participation in major dental conferences and her commitment to ongoing education.
                  <br />
                  <b>Specialty : </b>Dental Surgery<br />
                  <b>Degrees : </b>B.D.S., Pravara Institute of Medical Sciences, Loni<br />
                  <b>Experience : </b>Over 4 years at Aastha Dental Hospital and Microscopic Root Canal Centre<br />
                  <b>Expertise : </b>Single Sitting Root Canals, Painless Root Canals, Smile Correction, Smile Design<br />
                  <b>Education & Training : </b>Attended International 3D Cleaning Congress and International Congress on Stem Cells in Dentistry<br></br>
                  <b>Affiliation : </b> Member, Indian Dental Association, Nashik Chapter<br />


                </Typography>
                <input type="checkbox" class="check" />

              </Box>
            </motion.div>
          </Grid>


        </Grid>
       
      </Box>
    </>
  );
};
export default DrAkshay;
