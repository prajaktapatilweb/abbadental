import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Avatar,  Typography } from "@mui/material";
import Image from "next/image";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import StarIcon from '@mui/icons-material/Star';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { motion} from "framer-motion";

export default function Countdown() { 
    var Details = [
        {
            icons: <SentimentSatisfiedAltIcon/>,
            title: <span> 20000+ <br/> Happy Smiles</span>,
           
        },
        {
            icons: <PersonAddAlt1Icon/>,
            title:  <span> 16+<br/> Years of Experience</span>,
          

        },
        {
            icons:<VolunteerActivismIcon/>,
            title: <span>1000+ <br></br> Dental Implants</span>,
            

        },

        {
            icons: <StarIcon/>,
            title: <span>4.9 <br/> Google Rating</span>,

        },


    ]

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

    return (
        <div>
           <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

            <Container sx={{
                backgroundColor: 'white',  py:{xs:3,sm:3,md:7},
                mt: -15, borderRadius: 4, 
                boxShadow:
                'rgba(100, 50, 93, 0.25) 0px 50px 60px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',
              
                '&:hover': {
                    backdropFilter: 'blur( 8px )',
                    transition: 'box-shadow 0.3s ease',
                },
            }}>

                <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                    {Details.map((item, i) => (

                        <Grid item xs={12} md={3}>
                            <Grid container spacing={0} alignItems='center' justifyContent='center'>
                                <Grid item xs={2} md={3}  textAlign='right'>

                                    <Avatar alt="" src="" sx={{ margin: 'auto', width: '35', height: 35, background: '#312d79', padding: 3, }}>{item.icons}</Avatar>
                                </Grid>

                                <Grid item xs={8} md={9}>
                                        <Typography variant='h4' sx={{ py: 1, color: '#312d79', cursor: 'pointer' }}>
                                            {item.title}
                                        </Typography>
                                 
                                </Grid></Grid>

                        </Grid>

                    ))}


                </Grid>

            </Container>
            </motion.div>
        </div>
    );
}
