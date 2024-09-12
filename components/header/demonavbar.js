import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Card, Grid, Hidden, Link } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import Countdown from "../home/Countdown";
import Navbar from "./navbar";


const pages = [
    { linkID: "/#home", label: "Home" },
    { linkID: "/#aboutus", label: "About Us" },
    { linkID: "/#treatments", label: "Treatments" },
    { linkID: "/#Doctors", label: "Doctors" },
    { linkID: "/#testimonials", label: "Testimonials" },
    { linkID: "/#gallery", label: "Gallery" },
    { linkID: "/#contactform", label: "Contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [flag, setFlag] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenMobileSubMenu = () => {
        // handleCloseNavMenu()
        setFlag(!flag);
    };

  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";



    return (
        <AppBar
        position="static"
        sx={{
            backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/clinicback4.jpg")`,
            // backgroundImage: ` url("/images/clinicback.jpg")`,
           
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:'center',
            display: "flex",
            height: "100%",
        }}
    >
            <section style={{
                background: '#121f38', width: '100%', padding: 0, borderRadius: 0,
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>
                               
                                <Link href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        +919702955057
                                    </a>
                                </Link>
                                /

                                <Link  href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    +919833389890
                                    </a>
                                </Link>{" "}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link 
                               href={`mailto:${'Dynamicdentalcare2013@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    Dynamicdentalcare2013@gmail.com
                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/dranujdynamicdentalcare/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>
                           
                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/dranuj6344/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="linkedin">
                                <a
                                    href="https://jsdl.in/DT-43QAIIEQQYA"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                     <Image src="/images/jd.png" width={20} height={20} ></Image>

                                      
                                      
                                </a>
                            </IconButton>
                            {/* <IconButton aria-label="youtube">
                                <a
                                    href="https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton> */}
                        </Box>
                    </Box>
                </Container>
            </section>
            {/* <section style={{
                // background: '#121f38',
                 width: '100%', padding: 3,
                background: 'rgba( 255, 255, 255, 0.4)',
                // backgroundColor:'white',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                textAlign: 'center', justifyContent: 'center', alignItems: 'center',
                // borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
                <Toolbar disableGutters >


                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", sm: "block", md: "block", lg: "none" },
                            }}
                        >
                            {pages.map((page, i) => {
                                // if (page.submenu) {
                                //     return <AccountMenu list={page.submenu} />

                                // } else {
                                return (
                                    <>
                                        <Link
                                            key={i}
                                            href={page.linkID}
                                            sx={{
                                                fontWeight: 800,
                                                letterSpacing: ".1rem",
                                                color: "black",
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}
                                        >
                                            <MenuItem
                                                key={page}
                                                onClick={
                                                    page.submenu
                                                        ? handleOpenMobileSubMenu
                                                        : handleCloseNavMenu
                                                }
                                            >
                                                <Grid container direction="row" alignItems="center">
                                                    {page.label} 
                                                </Grid>
                                            </MenuItem>
                                        </Link>
                                       
                                    </>
                                );
                            })}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow:1}}>                    
                        <Image src="/images/ddclogo1.png" width={150} height={80} objectFit="contain"></Image>
                        </Box>

                    {/* dekstop menu *
                    <Box
                        sx={{
                            flexGrow: 10,
                            display: { xs: "none", md: "flex", textDecoration: "none" },
                        }}
                    >
                        {pages.map((page, i) => {
                            if (page.submenu) {
                                
                                return (
                                    <Box sx={{ flexGrow: 0 }}>
                                        
                                        <Menu
                                            sx={{ mt: "45px" }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))} *
                                            {page?.submenu?.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.linkID}
                                                    sx={{
                                                        // mr: 2,
                                                        fontWeight: 800,
                                                        letterSpacing: ".1rem",
                                                        color: "black",
                                                        textDecoration: "none",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <MenuItem key={i} onClick={handleCloseUserMenu}>
                                                        <Typography variant="h5">{item.label}</Typography>
                                                    </MenuItem>
                                                </Link>
                                            ))}
                                        </Menu>
                                    </Box>
                                );
                            } else {
                                return (
                                    <Link
                                        key={i}
                                        href={page.linkID}
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "none",
                                                lg: "flex",
                                            },
                                            fontWeight: 900,
                                            letterSpacing: ".1rem",
                                            color: '#29357a',
                                            textDecoration: "none",
                                            float: "right",

                                            '&:hover': {
                                                color:'white'
                                            }

                                          
                                        }}
                                        
                                    >
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontSize: { md: 15, lg: 16, xl: 16 } }}
                                            >
                                                {page.label}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                );
                            }
                        })}
                    </Box>

                </Toolbar>
            </section> */}
            <section style={{
                 padding: 3,
                background: 'rgba( 255, 255, 255, 0.4)',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
<Navbar/>
</section>
            <Box sx={{ my: 10 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Grid item xs={12} md={12}>
                        <Box sx={{mt:20,mb:5}}>
                            {/* <Typography
                                variant="p"
                                sx={{ color: "white", lineHeight: 1.6, fontSize: 23,mt:10 }}
                            >
                                {" "}
                                Experience the Best Dentist in Airoli & Thane!
                            </Typography> */}
                            <Typography
                                component="h2"
                                sx={{
                                    // width: { md: 850 },
                                    position: "relative",
                                    fontSize: { xs: 35, md: 40, lg: 40 },
                                    
                                    // mb: { xs: 3, sm: 2,md:20 },
                                    letterSpacing: 1.5,
                                    fontWeight: "bold",
                                    color: "black",
                                    lineHeight: 1.5,
                                }}
                            >
                                {" "}
                                Your Journey to Dental Wellness Starts Here!
                            </Typography>
                      

                            {/* <Box sx={{ "& button": { mt: 2, mb: 7 } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        color="white"
                                        size="large"
                                        variant="outlined"
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 17,
                                            border: "1px solid",
                                            borderRadius: 1,
                                            background:'#70cad2',
                                            borderColor: "#70cad2",
                                            color: "#2b337d",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box> */}
                        </Box>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
