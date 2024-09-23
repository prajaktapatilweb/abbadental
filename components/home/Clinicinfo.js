import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList2 } from "../constants/titlefile";

const Clinicinfo = () => {
   
    return (
        <>

            {/* <!-- ======= About Us Section ======= --> */}
                <Container sx={{py:10}}>
                {/* <Heading data={headList2}></Heading> */}
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}>
                            <Drgallery />
                            {/* <Image
                                    src="/images/clinic1.jpg"
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    objectFit="cover"
                                    alt="dr-akshays-dentavenue-dental-clinic-chembur-mumbai"
                                /> */}
                            {/* <img src="/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" class="img-fluid" alt="" /> */}
                        </Grid>
                        <Grid item xs={12} md={6} textAlign='justify'>
                            <Typography component="h2" sx={{ fontSize: { xs: 27, md: 31 },fontWeight:'700',  fontFamily: '"Poppins", sans-serif', my: { xs: 3, md: 0 },mb:1 }}>Abbad Dental Clinic & Implant Centre</Typography>
                            <p class="fst-italic" style={{ marginTop: 4, marginBottom: 0,fontFamily: '"Poppins", sans-serif' }}>
                                Welcome to Abbad Dental Clinic and Implant Center, where you will receive care from the best dentist in Nashik. Our clinic is led by the esteemed Dr. Nikhil Abbad, M.D.S., a highly skilled Consultant Prosthodontist specializing in Crowns, Bridges, and Oral Implants, and Dr. Leena Abbad, B.D.S., an expert in Endodontics and Restorative Dentistry. Together, they offer top-tier, compassionate care through a multidisciplinary approach.
                                <br></br>
                                At our dental clinic in Nashik, we provide comprehensive care for all ages, ensuring a comfortable and enjoyable experience. Our services include full mouth rehabilitation, dental implants, root canal treatment, dental veneers, digital smile designing, crowns & bridges, and braces. With our advanced CBCT machine and cutting-edge digital procedures, we deliver precise and effective treatments to enhance your smile and overall dental health.
                                <br></br>
                                Experience exceptional care at Abbad Dental Clinic and Implant Center. Contact us today to schedule your appointment and take the first step towards a healthier, more beautiful smile. If you're searching for a "dental clinic near me," look no further—your perfect choice is here.


                            </p>
                            {/* <List>
                                {explist.map((item, i) => (
                                    <ListItem
                                        key={item}
                                    >
                                        <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: 'primary.main' }} />
                                        {item}
                                    </ListItem>
                                ))}
                            </List> */}

                           
                        </Grid>
                    </Grid>

                </Container>
        </>
    );
};
export default Clinicinfo;
