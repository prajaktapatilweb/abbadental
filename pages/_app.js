import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
               
                                <title>
                                Best Dentist in Nashik - Abbad Dental Clinic & Implant Centre

                                </title>
                                <meta name="title" content="Best Dentist in Nashik - Abbad Dental Clinic & Implant Centre"></meta>
                                <meta name='description' content="Dental emergencies? We've got you covered. Our dental clinic in Nashik provides fast and reliable emergency dental care to alleviate pain and restore your oral health. 20K+ satisfied patients, 16+ years of experience. Contact us now."></meta>
                                {/* <meta name='google-site-verification'  content=""></meta> */}
                                <link rel="canonical" href="https://abbaddentalclinic.com/"/>
                                {/* <script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dynamic Dental Care",
  image: "https://www.dynamicdentalcare.in/_next/image?url=%2Fimages%2FThane%2Ft%2Fclinic2.jpg&w=1920&q=75",
  "@id": "",
  url: "https://www.dynamicdentalcare.in/",
  telephone: "9702955057",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No.1, Ground Floor, New Sahjeevan Society, near Panchganga, 2nd Rabodi",
    addressLocality: "Thane",
    postalCode: "400601",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.2046766,
    longitude: 72.9851153
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Friday",
      "Thursday",
      "Wednesday",
      "Saturday",
      "Sunday"
    ],
    opens: "10:00",
    closes: "14:00"
  },{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "17:00",
    closes: "22:00"
                                    }],
  sameAs: "https://www.facebook.com/dranujdynamicdentalcare/" 
}),
                                 }}
/> */}

                              

                     
               
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
