import React from 'react'
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { deepOrange } from '@mui/material/colors';


export default function Dentalservices() {
    var Details = [
        {
            icons: "/images/icons/implant.png",
            title: 'Dental implants',
        },
        {
            icons: "/images/icons/dental-care.png",
            title: 'Crowns & Bridges',
        },
        {
            icons: "/images/icons/dental-care2.png",
            title: 'Tooth Extraction',
        },

        {
            icons: "/images/icons/dental-care2.png",
            title: 'Pediatric Dentistry',
        },
        {
            icons: "/images/icons/braces.png",
            title: 'Braces & Aligners',
        },
        {
            icons: "/images/icons/root.png",
            title: 'Root Canal',
        },
        {
            icons: "/images/icons/whitening.png",
            title: 'Teeth Whitening',
        },
        {
            icons: "/images/icons/veeners.png",
            title: 'Dental Veneers',
        },
        {
            icons: "/images/icons/dental-care2.png",
            title: 'Full Mouth Reconstruction',

        }
    ]
    return (
        <div>
            <Box
                id="services"
                sx={{ py: { xs: 10, md: 5 }, backgroundColor: "white" }}
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
    backgroundColor: 'primary.main',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    width:'100%',
    height: '100%', // Makes sure the card takes up the full height
    '&:hover': {
      backgroundColor: 'primary.dark',
      boxShadow:
        'rgba(100, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 10px -2px 6px 5px inset',
      '& .MuiAvatar-root': {
        backgroundColor: 'red', // Change avatar color on hover
      },
    },
  }}
>
                    <Grid container spacing={3} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={3}>

                                    <Avatar alt="R" src='' sx={{  width: 50, height: 50, backgroundColor:'primary.dark', padding: 4, 
                                        
                                     }}><Image src={item.icons} width={40} height={40}></Image></Avatar>
</Grid>
                         
<Grid item xs={12} md={9}>

                                    <Typography variant='h5'> {item.title} </Typography>
                               <p style={{marginTop:3,textAlign:'justify'}}>kjjkdf nnfbkjggf ngfkbjjgf  kkjgfbkjjg ngfkjbkj</p>
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
