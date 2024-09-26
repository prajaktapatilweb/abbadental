import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {  motion } from "framer-motion";
import { Grid, Hidden, Link,Container } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from "./navbar";



function ResponsiveAppBar() {

  const contactno1 ="+919713435111";
  const contactno2 = "+919923708233" 


  const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    
    animate:{
        x:0,
        opacity:1,
        transition:{
        
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollbutton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }

}

    return (
        <AppBar
        position="static"
        sx={{
            backgroundImage:{xs: `linear-gradient(rgba(1, 1, 1, 0.0), rgba(1, 1, 1, 0.7)), url("/images/clinics1/clinic8.jpg")`,sm:`linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/back11.jpg")`,md:` url("/images/heroback1.jpg")`},
          
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:'center',
        
           
        }}
    >
            <section style={{
                background: '#121f38', width: '100%', padding: 0, borderRadius: 0,
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>
                               
                                <Link href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        +919713435111

                                    </a>
                                </Link>
                                /

                                <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    +919923708233

                                    </a>
                                </Link>{" "}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link 
                               href={`mailto:${'dr.abbaddentalclinic@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    dr.abbaddentalclinic@gmail.com
                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/abbaddentalclinicnashik/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>
                           
                            <IconButton aria-label="instagram">
                                <a
                                    href=" https://www.instagram.com/abbaddentalclinic/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                        
                            <IconButton aria-label="youtube">
                                <a
                                    href=" https://www.youtube.com/@abbaddentalclinicnashik"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="justdial">
                                <a
                                    href="https://www.justdial.com/Nashik/Abbad-Dental-Clinic-Implant-Center-Opp-BYK-College-Next-to-Fastrack-Showroom-College-Road/0253PX253-X253-221218231157-S3D4_BZDET"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                     <Image src="/images/jd.png" width={20} height={20} ></Image>

                                      
                                      
                                </a>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </section>
        
            <section style={{
                 padding: 3,
                background: 'rgba( 255, 255, 255, 0.4)',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
<Navbar/>
</section>
            <Box sx={{ my: 18 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"
                >
                    <Grid item xs={12} md={7} sx={{p:3,mt:{xs:0,sm:0,md:-7}}}>
                    <motion.div className="textcontainer" variants={textVariants}
        initial="initial"
        animate="animate"
        >
                           <Box  sx={{
                                    position: "relative",
                                    fontSize:{xs:'32px',sm:'30px',md:'28px'},
                                    letterSpacing: 1.5,
                                    fontWeight: '1000',
                                    color: {xs:'white',sm:'white', md:"#28282B"},
                                    lineHeight: 1.3,
                                    fontFamily: '"Poppins", sans-serif',
                                    // '-webkit-text-stroke': '1px #28282B',
                                 
                                    
                                }}>
                           <motion.h2  variants={textVariants} >
                              
                                Where Precision Meets Unmatched Luxury in Dental Care

                            </motion.h2>
                            </Box>
                            <Hidden smDown>
                            <Typography
                                variant="p"
                                sx={{ color: "white", lineHeight: 0, fontSize: 23 }}
                            >
                               Expert Care for Every Stage of Life
                            </Typography>
                            </Hidden>
                            <Box sx={{ "& button": { mt: 3, mb: 7, } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        color="white"
                                        size="large"
                                        variant="outlined"
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 20,
                                          
                                            borderRadius: 1,
                                            background:'#2b337d',
                                           
                                            color: "white",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box> 
                       </motion.div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
