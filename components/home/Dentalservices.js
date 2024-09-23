import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';

import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';



export default function Dentalservices() {
    var Details = [
        {
            icons: "/images/icons/implant.png",
            icons1: "/images/icons/implant1.png",
            title: 'Dental implants',
        },
        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care1.png",
            title: 'Crowns & Bridges',
        },
        {
            icons: "/images/icons/dental-care2.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Tooth Extraction',
        },

        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Pediatric Dentistry',
        },
        {
            icons: "/images/icons/braces.png",
            icons1: "/images/icons/braces1.png",
            title: 'Braces & Aligners',
        },
        {
            icons: "/images/icons/root.png",
            icons1: "/images/icons/root1.png",
            title: 'Root Canal',
        },
        {
            icons: "/images/icons/whitening.png",
            icons1: "/images/icons/whitening1.png",
            title: 'Teeth Whitening',
        },
        {
            icons: "/images/icons/veeners.png",
            icons1: "/images/icons/veeners1.png",

            title: 'Dental Veneers',
        },
        {
            icons: "/images/icons/dental-care2.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Full Mouth Reconstruction',

        }
    ]


     // State to track if the card is hovered
     const [hoveredCard, setHoveredCard] = useState(null);
    return (
        <div>
            <Box
                id="services"
                sx={{ pt: { xs: 10, md: 7}, pb:10, backgroundColor: "white" }}
            >
                <div class="section-title">
                    <h2>Testimonials</h2>
                    <p>Genuine Google Reviews from Our Satisfied Patients</p>
                </div>
                <Container>
                    {/* <Heading data={headList2}></Heading> */}
                    {/* <Typography variant='h5' sx={{ textAlign: 'center', mb: 3, color: 'black' }}>
                        Explore a wide range of dental services at our dental clinic in Dombivli. Schedule your appointment now for expert care.

                    </Typography> */}
                    <Grid container spacing={3}>
                        {Details.map((item, i) => (

                            <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
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
                                    <Grid container spacing={3} alignItems='center' justifyContent='center'>
                                        <Grid item xs={12} md={3}>

                                            <Avatar alt="R" src='' sx={{
                                                width: 50, height: 50, backgroundColor: 'primary.dark', padding: 4,

                                            }}>
                     <Image
                    src={hoveredCard === i ? item.icons1 : item.icons} // Change image based on hover state
                    width={40}
                    height={40}
                  />
                    </Avatar>
                                        </Grid>

                                        <Grid item xs={12} md={9}>

                                            <Typography variant='h5'> {item.title} </Typography>
                                            <p style={{ marginTop: 3, textAlign: 'justify' }}>Maintaining the beauty of your natural smile and your health, it the top priority of our dental team</p>
                                        </Grid></Grid>
                                </Card>
                            </Grid>

                        ))}


                    </Grid>
                </Container >
            </Box>
        </div >
    )
}
