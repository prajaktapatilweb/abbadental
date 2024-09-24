import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion} from "framer-motion";
import Drgallery from "./Drgallery";

const Clinicinfo = () => {
     // Define the fade-right animation variants
const fadeRightVariants = {
    hidden: { opacity: 0, x: 100 },  // Start from the right (100px offset)
    visible: { 
      opacity: 1, 
      x: 0,  // Move to its original position (x: 0 means no offset)
      transition: {
        duration: 0.8,  // Duration of the animation
        ease: 'easeInOut',  // Easing function for a smooth motion
  
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

            {/* <!-- ======= About Us Section ======= --> */}
                <Container sx={{py:10}}>
                {/* <Heading data={headList2}></Heading> */}
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}>
                        <motion.div
  className="textcontainer"
  variants={fadeLeftVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>
                            <Drgallery />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6} textAlign='justify'>
                        <motion.div
  className="textcontainer"
  variants={fadeRightVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>
                            <Typography component="h2" sx={{ fontSize: { xs: 27, md: 31 },fontWeight:'700',  fontFamily: '"Poppins", sans-serif', my: { xs: 3, md: 0 },mb:1 }}>Abbad Dental Clinic & Implant Centre</Typography>
                            <p class="fst-italic" style={{ marginTop: 4, marginBottom: 0,fontFamily: '"Poppins", sans-serif' }}>
                                Welcome to Abbad Dental Clinic and Implant Center, where you will receive care from the best dentist in Nashik. Our clinic is led by the esteemed Dr. Nikhil Abbad, M.D.S., a highly skilled Consultant Prosthodontist specializing in Crowns, Bridges, and Oral Implants, and Dr. Leena Abbad, B.D.S., an expert in Endodontics and Restorative Dentistry. Together, they offer top-tier, compassionate care through a multidisciplinary approach.
                                <br></br>
                                At our dental clinic in Nashik, we provide comprehensive care for all ages, ensuring a comfortable and enjoyable experience. Our services include full mouth rehabilitation, dental implants, root canal treatment, dental veneers, digital smile designing, crowns & bridges, and braces. With our advanced CBCT machine and cutting-edge digital procedures, we deliver precise and effective treatments to enhance your smile and overall dental health.
                                <br></br>
                                Experience exceptional care at Abbad Dental Clinic and Implant Center. Contact us today to schedule your appointment and take the first step towards a healthier, more beautiful smile. If you're searching for a "dental clinic near me," look no further—your perfect choice is here.


                            </p>  
                            </motion.div>
                        </Grid>
                    </Grid>

                </Container>
        </>
    );
};
export default Clinicinfo;
