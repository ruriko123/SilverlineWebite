"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import ServicesTopmiddle from "@/Components/Services/ServicesTopmiddle";
import Contactus from "@/Components/ContactUS/Contactus";
import ServicesNavbarBottom from '@/Components/Services/ServicesNavbarBottom';
import BanquetServicesBottomMiddle from "@/Components/banquetManagement/ServicesBottomMiddle";




export default function retailManagement() {
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
            <ServicesNavbarBottom  firsttext={"Software for banquets."} secondtext={"Banquet Management tools customized just for your needs"} />
          </div>
        </div>
      </div>
      <div className="main vh-50" data-theme="dark">
        <ServicesTopmiddle toptext={"Banquet Management"} bottomtext={""} />
      </div>
      <div className="main vh-50" data-theme="dark">
        <BanquetServicesBottomMiddle />
      </div>

      <Contactus/>
      <Scrolltotop />

      <Footer />
    </div>
  );
}
