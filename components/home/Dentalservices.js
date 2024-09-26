import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Dentalservices() {
    var Details = [
        {
            icons: "/images/icons/implant.png",
            icons1: "/images/icons/implant1.png",
            title: 'Dental implants',
            desc:'Restore your smile with durable and natural-looking dental implants.'
        },
        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care1.png",
            title: 'Crowns & Bridges',
            desc:'Enhance your smile with custom crowns and bridges that fit seamlessly.'
        },
        {
            icons: "/images/icons/dental-care2.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Tooth Extraction',
            desc:'Experience a comfortable and safe tooth extraction process.'
        },

        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Pediatric Dentistry',
            desc:'Ensure your child’s dental health with gentle, specialized care.'
        },
        {
            icons: "/images/icons/braces.png",
            icons1: "/images/icons/braces1.png",
            title: 'Braces & Aligners',
            desc:'Achieve a straighter smile with our advanced braces and aligners.'
        },
        {
            icons: "/images/icons/root.png",
            icons1: "/images/icons/root1.png",
            title: 'RCT (Root Canal Treatment)',
            desc:'Relieve pain and save your tooth with our gentle root canal treatment.'
        },
        {
            icons: "/images/icons/whitening.png",
            icons1: "/images/icons/whitening1.png",
            title: 'Teeth Whitening',
            desc:'Brighten your smile with fast and effective professional whitening.'
        },
        {
            icons: "/images/icons/veeners.png",
            icons1: "/images/icons/veeners1.png",
            title: 'Dental Veneers',
            desc:'Transform your smile with custom veneers for a flawless look.'
        },
        {
            icons: "/images/icons/dental-care2.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Full Mouth Reconstruction',
            desc:'Rebuild and enhance your smile with a personalized reconstruction plan.'

        }
    ]

    

    // State to track if the card is hovered
    const [hoveredCard, setHoveredCard] = useState(null);

    // Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child (card) by 0.2 seconds
      },
    },
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to its final position
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
    return (
        <div>
            <Box
                id="treatments"
                sx={{ pt: { xs: 10, md: 7 }, pb: 10, backgroundColor: "white" }}
            >
                <div class="section-title">
                    <h2>The Art of Luxurious Dentistry</h2>
                    <p>Unparalleled Care for Those Who Expect the Best</p>
                </div>
             {/* Framer Motion Container for the animation */}
        <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
         
                    <Grid container spacing={3}>
                        {Details.map((item, i) => (

                            <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
                                   {/* Each card with fade-up animation */}
                <motion.div  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible" // Animation triggers when the element is in view
                  viewport={{ once: true }} // Only animate once
                  >
                                <Card
                                    sx={{
                                        backgroundColor: 'white',
                                        p: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontFamily: '"Poppins", sans-serif',
                                        width: '100%',
                                        height: '100%', // Makes sure the card takes up the full height
                                        boxShadow:
                                            'rgba(100, 50, 93, 0.25) 0px 50px 60px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',

                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                            color: 'white',
                                            '& .MuiAvatar-root': {
                                                backgroundColor: 'white', // Change avatar color on hover

                                            },

                                        },
                                    }}
                                    onMouseEnter={() => setHoveredCard(i)} // Set hover state for the current card
                                    onMouseLeave={() => setHoveredCard(null)}  // Reset hover state when not hovering

                                >
                                    <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
                                        <Grid item xs={12} md={3}>
                                        <Box
    sx={{
      display: 'flex',             // Enables flexbox layout
      justifyContent: 'center',     // Centers horizontally
      alignItems: 'center',         // Centers vertically
      textAlign: 'center',          // Ensures text (if any) is centered
      height: '100%',               // Full height for vertical centering
    }}
  >

                                            <Avatar alt="R" src='' sx={{
                                                width: 50, height: 50, backgroundColor: 'primary.dark', padding: 4,

                                            }}>
                                                <Image
                                                    src={hoveredCard === i ? item.icons1 : item.icons} // Change image based on hover state
                                                    width={40}
                                                    height={40}
                                                    
                                                />
                                            </Avatar>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={9}>

                                            <Typography variant='h5'> {item.title} </Typography>
                                            <p style={{ marginTop: 3, textAlign: 'justify' }}>{item.desc}</p>
                                        </Grid></Grid>
                                </Card>
                                </motion.div>
                            </Grid>

                        ))}


                    </Grid>
                </Container >
            </Box>
        </div >
    )
}
