import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Button, Card, Container, Grid, Hidden, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';

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
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));// For screens smaller than 'sm'
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards on mobile screens

  // Function to show more cards
  const handleShowMore = () => {
    setVisibleCards(Details.length); // Show all the cards when the button is clicked
  };

    return (
        <div>
            <Box
                id="treatments"
                sx={{ pt: { xs: 10, md: 7 }, pb: 10, backgroundColor: "white" }}
            >
                <div class="section-title">
                    <h1>The Art of Luxurious Dentistry</h1>
                    <h2>Unparalleled Care for Those Who Expect the Best</h2>
                </div>
             {/* Framer Motion Container for the animation */}
        <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
         
        <Grid container spacing={3}>
         {/* Show limited cards on mobile, and all cards on desktop */}
         {Details.slice(0, isMobile ? visibleCards : Details.length).map((item, i) => (
          <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: 'white',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: '"Poppins", sans-serif',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    'rgba(100, 50, 93, 0.25) 0px 50px 60px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundImage: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)',
                    },
                  },
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      <Avatar
                        alt="R"
                        src=''
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundImage: 'linear-gradient(to right, #305b9f 0%, #469ce2 100%)',
                          padding: 4,
                        }}
                      >
                        <Image
                          src={hoveredCard === i ? item.icons1 : item.icons}
                          width={40}
                          height={40}
                        />
                      </Avatar>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={9}>
                    <Typography variant='h4' sx={{ fontFamily: "League Spartan, sans-serif", fontWeight: 500, color: 'primary.dark', fontSize: '20px' }}>
                      {item.title}
                    </Typography>
                    <p style={{ marginTop: 3, textAlign: 'justify' }}>{item.desc}</p>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        ))}

        {/* Show "Explore More" button only if there are hidden cards */}
        {visibleCards < Details.length && (
          <Grid item xs={12} textAlign="center">
            <Hidden smUp>
            <Button variant="contained" sx={{backgroundColor:'primary.dark',mt:3}} onClick={handleShowMore}>
              Explore More
            </Button>
            </Hidden>
          </Grid>
        )}
      </Grid>
                </Container >
            </Box>
        </div >
    )
}
