"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";
import Bottommiddle from "@/Components/middle/Bottommiddle";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import ServicesTopmiddle from "@/Components/Services/ServicesTopmiddle";
import Contactus from "@/Components/ContactUS/Contactus";
import ServicesNavbarBottom from '@/Components/Services/ServicesNavbarBottom';
import Clients from "@/Components/Services/Clients";



export default function Services() {
  return (
    <div className="App">
      <div className="top ">
        <div className="hero">
          <div
            className="navbottom_wrapper vh-100 "
            style={{
              backgroundImage: "url('background.jpg')",
            }}>
            <Navbarcomponent type="services" />
            <ServicesNavbarBottom firsttext={"Variety of products to choose from"} secondtext={"Different software tools customized just for your business"}/>
          </div>
        </div>
      </div>
      <div className="main vh-50" data-theme="dark">
        <ServicesTopmiddle toptext={"Explore Our Services"} bottomtext={"Carefully  put together for a hassle-free and affordable experience."}/>
      </div>
      <div className="main vh-50" data-theme="dark">
        <Bottommiddle />
      </div>

        <Clients/>
      <Contactus/>
      <Scrolltotop />

      <Footer />
    </div>
  );
}
