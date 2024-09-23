import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { motion } from "framer-motion";
import { data } from "./popular-course.data";

const DrAkshay = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const Lists = motion(List);
  const ListItems = motion(ListItem);
  const explist = [
    "10+ Years of experience",
    "Experienced Prosthodontist",
    "Government Dental College Alumni",
    "Comprehensive Treatment Solutions",
    "Specialized in Implants and FMR",
    "Former Assistant Professor",
  ];
  return (
    <>
   
     

    <Box  id="Doctors" sx={{py:8}}>
    <Container>
        <div class="section-title">
        <h2>Meet Our Team of Expert Dentists</h2>
<p>Leaders in Dental Excellence</p>
</div>
     </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          sx={{fontFamily: '"Poppins", sans-serif'}}
        >

            
              <Grid item xs={12} sm={6} sx={{p:1}}>
              <Image
      src="/images/dr/drnikhil2.jpg"
      alt="Dr Nikhil"
      width={100}
      height={100}
    layout="responsive"
    objectFit="contain"
      style={{
      borderTop:'10px  #2b337d solid',
      paddingRight:3,
      paddingBottom:3,
      borderLeft:'10px  #1799b3 outset',
      borderBottomLeftRadius:'15px',
      borderTopRightRadius:'10px',
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
    />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ px: 3 }}>
               
                  < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.dark",
                      textAlign:'left'
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
                   M.D.S. Consultant, Prosthodontist, Crown, Bridge & Oral Implantologist

                  
                  </span>

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                  Dr. Nikhil Abbad is a highly accomplished Consultant Prosthodontist with over 8 years of experience, recognized as one of the best dentists in Nashik. Specializing in Crowns, Bridges, and Oral Implants, he has a distinguished educational background with an M.D.S. in Prosthodontics and Oral Implantology.

Dr. Nikhil is the founder of Abbad Dental Clinic and Implant Center in Nashik, where he provides expert care in Implant Surgery and Full Mouth Rehabilitation. His professional journey and achievements include:
<br/>
<b>Specialty:</b> Prosthodontics, Crown & Bridge, Oral Implantology<br/>
<b>Degrees:</b> M.D.S., Modern Dental College, Indore<br/>
<b>Experience: </b>Over 8 years in advanced prosthodontics and implantology<br/>
<b>Achievements:</b> Gold Medalist in MDS program; specialized training in Digital Smile Designing (University of Los Angeles)<br/>
<b>Research: </b>Published articles in international journals; awarded for best paper presentations in implant dentistry<br/>
<b>Prosthetics Training: </b>Oral and maxillofacial prosthetics at TATA Memorial Hospital, Mumbai<br/>
{/* <b>Academic Role:</b> Visiting Assistant Professor, SMBT Sangamner<br/> */}

{/* <p>Dr. Nikhil Abbad is passionate about improving patients' confidence through effective dental treatments. He is a dedicated member of the Indian Dental Association, Nashik Chapter, and remains committed to enhancing global healthcare through his expertise. If you’re searching for a “dentist near me”, your search ends here.
</p> */}

                  </Typography>
                </Box>
              </Grid>
            {/* </Card> */}



            <Grid item xs={12} sm={6} order={2} sx={{p:1}}>
              <Image
      src="/images/dr/drleena.jpg"
      alt="Dr Nikhil"
      width={100}
      height={100}
    layout="responsive"
    objectFit="contain"
      style={{
        borderRight:'10px  #2b337d solid',
      paddingTop:3,
      paddingLeft:3,
      borderBottom:'10px  #1799b3 solid',
      borderBottomLeftRadius:'15px',
      borderTopRightRadius:'10px',
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
    />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ px: 3 }}>
               
                  < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.dark",
                      textAlign:'left'
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
                  <Typography
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
<br/>
<b>Specialty : </b>Dental Surgery<br/>
<b>Degrees : </b>B.D.S., Pravara Institute of Medical Sciences, Loni<br/>
{/* <b>Experience : </b>Over 4 years at Aastha Dental Hospital and Microscopic Root Canal Centre<br/>
<b>Expertise : </b>Single Sitting Root Canals, Painless Root Canals, Smile Correction, Smile Design<br/> */}
{/* <b>Education & Training : </b>Attended International 3D Cleaning Congress and International Congress on Stem Cells in Dentistry<br></br>
<b>Affiliation : </b> Member, Indian Dental Association, Nashik Chapter<br/> */}

{/* <p>Dr. Nikhil Abbad is passionate about improving patients' confidence through effective dental treatments. He is a dedicated member of the Indian Dental Association, Nashik Chapter, and remains committed to enhancing global healthcare through his expertise. If you’re searching for a “dentist near me”, your search ends here.
</p> */}

                  </Typography>
                </Box>
              </Grid>
           
             
            </Grid>
            {/* </Card> */}


   
     



    
    </Box>
    </>
  );
};
export default DrAkshay;
