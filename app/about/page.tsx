"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import AboutBottommiddle from "@/Components/middle/AboutBottommiddle";
import Countupcomponent from '@/Components/AboutCount/Countupcomponent';
import Contactus from "@/Components/ContactUS/Contactus";




export default function About() {
  return (
    <div className="App">
     <Navbarcomponent type="about" />
        <AboutBottommiddle/>
      {/* <AboutNavbarBottom /> */}
      <Countupcomponent/>
      <Contactus/>
    <Scrolltotop />
<Footer />
    </div>
   
  );
}
