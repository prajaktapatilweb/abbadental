import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import ScrollUp from "../home/ScrollUp";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Footer = () => {
  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121f38",
        py: 9,
        px:3,
        color: "primary.contrastText",
      }}
    >

      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={0} alignItems='center' justifyContent='center'>
          <Grid container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
          
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' sx={{p:3}}>

              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Image src="/images/ddclogo.jpeg" width={180} height={100} style={{marginBottom:'7px'}} ></Image>


                <Typography  sx={{ letterSpacing: 1, mb: 2,textAlign:'justify' }}>
                  Looking for a dental clinic in Airoli? We're here for you, conveniently located to serve the Airoli community. Whether you're in Navi Mumbai or Thane West, we're happy to welcome you as well.

                </Typography>


              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' textAlign='center' sx={{p:3}}>


              <Typography
                sx={{
                  color: "white",
                  // mb: { xs: 1, md: 2 },
                  fontSize: { xs: 34, md: 25 },
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  display: 'inline-block', // Ensures the border only goes as wide as the text
                  borderBottom: '1px solid lightgrey', // Border only below the text
                  mb: 3

                }}
              >
                Clinic 1
              </Typography>

              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>

                  2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road, Nashik, Maharashtra 422005
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                  <b>Monday to Saturday:</b> 10 AM to 09 PM<br></br>
                  <b>Sunday:</b> 10 AM to 01 PM
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify' }}>

                  0253 2507965, 97134 35111
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' textAlign='center' sx={{p:3}} >
              <Typography
                sx={{
                  color: "white",
                  // mb: { xs: 1, md: 2 },
                  fontSize: { xs: 34, md: 25 },
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  display: 'inline-block', // Ensures the border only goes as wide as the text
                  borderBottom: '1px solid lightgrey', // Border only below the text
                  mb: 3

                }}
              >
                Clinic 2
              </Typography>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                  2055, Dahi Pool, Nehru Chowk, next to Sandeep Cut Piece Center, Naikwadi Pura, Panchavati, Nashik, Maharashtra 422001

                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                  <b>Monday to Saturday:</b> 10 AM to 08:30 PM<br></br>
                  <b>Sunday:</b> 10 AM to 01 PM
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify' }}>

                  0253 2507965, 99237 08233
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#" className="footermenu">
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu">
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu">
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu">
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu">
                Gallery
              </Link>
            </Typography>
          
          
</Grid> */}


          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
