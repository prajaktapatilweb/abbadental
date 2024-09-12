import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../components/home/heroadd/hero1.css";
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
                                Dentist in Airoli, Dental Clinic in Thane - Dynamic Dental Care
                                </title>
                                <meta name="title" content=" Dentist in Thane | Dentist in Airoli - Dynamic Dental Care"></meta>
                                <meta name='description' content="Looking for a dental clinic near me? Visit Dynamic Dental Care, the best dental clinic in Airoli & Thane, for exceptional dental care. 10+ Years of experience."></meta>
                                {/* <meta name='google-site-verification'  content=""></meta> */}
                                <link rel="canonical" href="https://www.dynamicdentalcare.in/"/>
                                <script type="application/ld+json"
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
/>
<script type="application/ld+json"

dangerouslySetInnerHTML={{
    __html: JSON.stringify({


  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dynamic Dental Care",
  image: "https://www.dynamicdentalcare.in/_next/image?url=%2Fimages%2FAiroli%2Fa%2Fclinic2.jpg&w=1920&q=75",
  "@id": "",
  url: "https://www.dynamicdentalcare.in/",
  telephone: "9833389890",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R.No. B-001, Plot No. A-6/2, Suvarna Dham Bldg, Sector 9, Near HDFC Bank, Airoli",
    addressLocality: "Navi Mumbai",
    postalCode: "400708",
    addressCountry: "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1478417,
    "longitude": 72.9938735
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Friday",
      "Thursday",
      "Wednesday",
      "Saturday"
    ],
    "opens": "11:00",
    "closes": "15:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "18:00",
    "closes": "22:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "11:00",
    "closes": "15:00"
  }],
  "sameAs": "https://www.facebook.com/dranujdynamicdentalcare/" 

}),
                    }}
/>  

<script type="application/ld+json"
dangerouslySetInnerHTML={{
    __html: JSON.stringify({


  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Shweta Mishra",
  "image": "https://www.dynamicdentalcare.in/_next/image?url=%2Fimages%2Fdr%2Fshweta.jpeg&w=384&q=75",
  "@id": "",
  "url": "https://www.dynamicdentalcare.in/",
  "telephone": "9833389890",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R.No. B-001, Plot No. A-6/2, Suvarna Dham Bldg, Sector 9, Near HDFC Bank, Airoli",
    "addressLocality": "Navi Mumbai",
    "postalCode": "400708",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1478417,
    "longitude": 72.9938735
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Friday",
      "Thursday",
      "Wednesday",
      "Saturday"
    ],
    "opens": "11:00",
    "closes": "15:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "18:00",
    "closes": "22:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "11:00",
    "closes": "15:00"
  }],
  "sameAs": "https://www.facebook.com/dranujdynamicdentalcare/" 
    
}),
                    }}
/>
<script type="application/ld+json"
dangerouslySetInnerHTML={{
    __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Anuj Mishra",
  "image": "https://www.dynamicdentalcare.in/_next/image?url=%2Fimages%2Fdr%2Fdrs6.jpg&w=384&q=75",
  "@id": "",
  "url": "https://www.dynamicdentalcare.in/",
  "telephone": "9702955057",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No.1, Ground Floor, New Sahjeevan Society, near Panchganga, 2nd Rabodi",
    "addressLocality": "Thane",
    "postalCode": "400601",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.2046766,
    "longitude": 72.9851153
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Friday",
      "Thursday",
      "Wednesday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "14:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "17:00",
    "closes": "22:00"
  }],
  "sameAs": "https://www.facebook.com/dranujdynamicdentalcare/" 
    }),
}}
/>
                              

                     
               
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
