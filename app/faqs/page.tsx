"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import Countupcomponent from '@/Components/About/AboutCount/Countupcomponent';
import Contactus from "@/Components/ContactUS/Contactus";
import AboutTimeline from './../../Components/About/AboutTimeline/AboutTimeline';
import FaqBottomMiddle from "@/Components/Faq/faqbottommiddle/FaqBottomMiddle";
import Faqsnavcomponents from "@/Components/Faq/faqsnavcomponents/Faqsnavcomponents";
export default function Faqs() {
  return (
    <div className="App">
     <Navbarcomponent type="faq" />
        <FaqBottomMiddle/>
          <Faqsnavcomponents/>
      <Contactus/>
    <Scrolltotop />
<Footer />
    </div>
   
  );
}
