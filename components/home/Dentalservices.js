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
                sx={{ py: { xs: 10, md: 10 }, backgroundColor: "white" }}
            >
                <Container>
                    {/* <Heading data={headList2}></Heading> */}
                    <Typography variant='h5' sx={{ textAlign: 'center', mb: 3, color: 'white' }}>
                        Explore a wide range of dental services at our dental clinic in Dombivli. Schedule your appointment now for expert care.

                    </Typography>
                    <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
                        {Details.map((item, i) => (

                            <Grid item xs={12} md={4}>
                    <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
                    <Grid item xs={12} md={2}>

                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, background: '#309cd1', padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>
</Grid>
                         
<Grid item xs={12} md={8}>

                                    <Typography variant='h4' sx={{ py: 2 }}> {item.title} </Typography>
                                </Grid></Grid>  

                            </Grid>

                        ))}


                    </Grid>
                </Container >
            </Box>
        </div >
    )
}
