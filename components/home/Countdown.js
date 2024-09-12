import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import CountUp from "react-countup";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Countdown() {



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
                    mx: { xs: 7, sm: 7, md: 5 }
                    // background: #00000038;

                }}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                    >
                        <Grid item xs={12} sm={12} md={12} alignItems='center' justifyContent='center' textAlign='center'>

                            <Typography
                                sx={{
                                    color: "black",
                                    // mb: { xs: 1, md: 2 },
                                    fontSize: { xs: 34, md: 40 },
                                    fontWeight: "bold",
                                    fontFamily: "Open Sans, sans-serif"
                                }}
                            >
                                Our Locations
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} alignItems='center' justifyContent='center' textAlign='center' sx={{ borderRight: '1px solid lightgrey',pr:2 }}>
                       <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                       <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                        </Grid>
                        <Grid item xs={11}  md={11} sx={{textAlign:'justify',mb:2}}>
                          
                           2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road, Nashik, Maharashtra 422005
                            </Grid>
                            </Grid>
                            <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                            <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
</Grid>
                            <Grid item xs={11}  md={11} sx={{textAlign:'justify',mb:2}}>
                            <b>Monday to Saturday:</b> 10 AM to 09 PM<br></br>
                            <b>Sunday:</b> 10 AM to 01 PM
                            </Grid>
                            </Grid>
                            <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                            <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                            </Grid>
                            <Grid item xs={11}  md={11} sx={{textAlign:'justify'}}>

                            0253 2507965, 97134 35111
                          </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} alignItems='center' justifyContent='center' textAlign='center' sx={{pl:2 }}>
                       <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                       <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                        </Grid>
                        <Grid item xs={11}  md={11} sx={{textAlign:'justify',mb:2}}>
                        2055, Dahi Pool, Nehru Chowk, next to Sandeep Cut Piece Center, Naikwadi Pura, Panchavati, Nashik, Maharashtra 422001

                            </Grid>
                            </Grid>
                            <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                            <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
</Grid>
                            <Grid item xs={11}  md={11} sx={{textAlign:'justify',mb:2}}>
                            <b>Monday to Saturday:</b> 10 AM to 08:30 PM<br></br>
                            <b>Sunday:</b> 10 AM to 01 PM
                            </Grid>
                            </Grid>
                            <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={1}  md={1} >
                            <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                            </Grid>
                            <Grid item xs={11}  md={11} sx={{textAlign:'justify'}}>

                            0253 2507965, 99237 08233
                          </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Card>

            </Box>
        </div>
    );
}
