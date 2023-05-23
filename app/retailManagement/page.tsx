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
import RetailServicesBottomMiddle from "@/Components/retailManagement/ServicesBottomMiddle";


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
            <ServicesNavbarBottom  firsttext={"Software for Retail businesses."} secondtext={"Retail Management tools customized just for your needs"} />
          </div>
        </div>
      </div>
      <div className="main vh-50" data-theme="dark">
        <ServicesTopmiddle toptext={"Retail Management"} bottomtext={"SalesPro"} />
      </div>
      <div className="main vh-50" data-theme="dark">
        <RetailServicesBottomMiddle />
      </div>

      <Contactus/>
      <Scrolltotop />

      <Footer />
    </div>
  );
}
