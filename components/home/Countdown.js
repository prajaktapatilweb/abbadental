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
            link: 'contactform'
        },
        {
            icons: "/images/icons/dental-care.png",
            title: 'Total Patients',
            link: 'contactform'

        },
        {
            icons: "/images/icons/dental-care2.png",
            title: 'Award Winner',
            link: 'contactform'

        },

        {
            icons: "/images/icons/dental-care2.png",
            title: 'Our services',
            link: 'contactform'

        },


    ]

    return (
        <div>
            <Container sx={{
                backgroundColor: 'white',  p: 7,
                mt: -15, borderRadius: 4, 
                boxShadow:'rgba(100, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 10px -2px 6px 5px inset',
            
                backdropFilter: 'blur( 8px )',
                transition: 'box-shadow 0.3s ease',
                // '&:hover': {
                // },
            }}>

                <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                    {Details.map((item, i) => (

                        <Grid item xs={12} md={3}>
                            <Grid container spacing={2} alignItems='center' justifyContent='center' textAlign='center'>
                                <Grid item xs={12} md={2}>

                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: '30', height: 30, background: '#312d79', padding: 3, }}><Image src={item.icons} width={30} height={30}></Image></Avatar>
                                </Grid>

                                <Grid item xs={12} md={8}>

                                    <ScrollLink
                                        to="contactform" // ID of the target element
                                        smooth={true}    // Enables smooth scrolling
                                        duration={350}   // Duration of the scrolling animation
                                        offset={-50}     // Optional: Adjust the scroll offset if you have a fixed header

                                    >
                                        <Typography variant='h4' sx={{ py: 2, color: '#312d79', cursor: 'pointer' }}>
                                            {item.title}
                                        </Typography>
                                    </ScrollLink>
                                </Grid></Grid>

                        </Grid>

                    ))}


                </Grid>

            </Container>
        </div>
    );
}
