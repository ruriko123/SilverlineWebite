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
import CloudKitchenServicesBottomMiddle from "@/Components/cloudKitchen/ServicesBottomMiddle";



export default function cloudKitchen() {
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
        <ServicesTopmiddle toptext={"Banquet Management"} bottomtext={"lorem ipsum dolor sit amet"} />
      </div>
      <div className="main vh-50" data-theme="dark">
       <CloudKitchenServicesBottomMiddle/>
      </div>

      <Contactus/>
      <Scrolltotop />

      <Footer />
    </div>
  );
}
