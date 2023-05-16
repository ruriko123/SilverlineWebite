"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import Contactus from "@/Components/ContactUS/Contactus";
import PrivacypolicyBottomMiddle from "@/Components/PrivacyPolicy/PrivacypolicyBottomMiddle/PrivacypolicyBottomMiddle";
import PrivacyPolicyContents from "@/Components/PrivacyPolicy/PrivacypolicyBottomMiddle/PrivacyPolicyContents/PrivacyPolicyContents";

export default function Faqs() {
  return (
    <div className="App">
     <Navbarcomponent type="faq" />
        <PrivacypolicyBottomMiddle/>
        <PrivacyPolicyContents/>
      <Contactus/>
    <Scrolltotop />
<Footer />
    </div>
   
  );
}
