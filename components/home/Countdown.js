import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Avatar, Card, Typography } from "@mui/material";
import CountUp from "react-countup";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from "../styled-button";

export default function Countdown() {

    var Details = [
        {
            icons: "/images/icons/implant.png",
            title: 'Years of Experience',
            link:'contactform'
        },
        {
            icons: "/images/icons/dental-care.png",
            title: 'Total Patients',
            link:'contactform'

        },
        {
            icons: "/images/icons/dental-care2.png",
            title: 'Award Winner',
            link:'contactform'

        },

        {
            icons: "/images/icons/dental-care2.png",
            title: 'Our services',
            link:'contactform'

        },
      
     
    ]

    return (
        <div>
            <Box>
                <Card sx={{
                    background: 'white',
                    boxShadow: ' 0 10px 10px 1px #0000001f',
                    backdropFilter: 'blur( 8px )',
                    // -webkitBackdropFilter: blur( 2px );
                    // borderRadius: 3,
                    border: '1px solid #ffffff36',
                    p: 5,
                    mt: -7,
                    mx: { xs: 7, sm: 7, md: 4 }
                    // background: #00000038;

                }}>
                     <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                        {Details.map((item, i) => (

                            <Grid item xs={12} md={3}>
                    <Grid container spacing={2} alignItems='center' justifyContent='center' textAlign='center'>
                    <Grid item xs={12} md={2}>

                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: '30', height: 30, background: '#309cd1', padding: 3, }}><Image src={item.icons} width={30} height={30}></Image></Avatar>
</Grid>
                         
<Grid item xs={12} md={8}>

<ScrollLink
  to="contactform" // ID of the target element
  smooth={true}    // Enables smooth scrolling
  duration={350}   // Duration of the scrolling animation
  offset={-50}     // Optional: Adjust the scroll offset if you have a fixed header
  
>
  <Typography variant='h4' sx={{ py: 2, color: 'black',cursor:'pointer' }}>
    {item.title}
  </Typography>
</ScrollLink>
                                </Grid></Grid>  

                            </Grid>

                        ))}


                    </Grid>
                </Card>

            </Box>
        </div>
    );
}
