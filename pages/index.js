import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import DrAkshay from '../components/home/DrAkshay';
import Contact from '../components/home/Contact';
import LabTabs from '../components/home/LabTabs';
import Navbar from "../components/header/navbar";
import Countdown from "../components/home/Countdown";
import Clinicinfo from "../components/home/Clinicinfo";
import Awards from "../components/home/Awards";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      <Countdown />
<Clinicinfo></Clinicinfo>

      
      <Dentalservices></Dentalservices>

      <DrAkshay></DrAkshay>
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        <Awards/>
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
      <Contact></Contact>
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

