import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import { Details } from "./mentors.data";
import DownloadCard from "./DownloadCard";

const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "relative",
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(1),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
}));
const Associates = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const sliderConfig = {
        infinite: true,
        arrows:false,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 4,
        slidesToScroll: 1,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: '50%',
                }}
            />
        ),
    };
    return (
        <Box
            id="testimonials"
            sx={{
                py: { xs: 5, md: 7 },
                backgroundColor: "#fafafa",
            }}
        >
            <Container>
                <div class="section-title">
                    <h2>Associate Dentists </h2>
                    <p>Hear from Those Who Trust Us with Their Smiles</p>
                </div>
                <Slider {...sliderConfig}>
                    {Details.map((item,i) => (
                        <DownloadCard key={i} item={item} />
                    ))}
                </Slider>


            </Container>
        </Box>
    );
};
export default Associates;
