"use client";
import Navbarcomponent from "@components/top/navbar/Navbar";
import "@styles/App.scss";
import Form from "@components/footer/form/Form";
import "@picocss/pico";
import "@styles/globals.css";
import Footer from "@/Components/footer/Footer";
import Scrolltotop from "@/Components/scrolltotop/Scrolltotop";
import {Panel, Divider, Row, Col } from 'rsuite';
import { AiOutlineMail } from "react-icons/ai";
import { FcMissedCall } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

export default function Contact() {
    let iconStyles = { color: "red", fontSize: "1.5em" };
  return (
    <div className="App">

      <Navbarcomponent  data-theme="dark" type="contact"/>
      <main className="container mt-5 mb-5">
          <Form />
        </main>


        <div className="container">
        <Panel  shaded className='divide-y divide-blue-200 h-fit mt-3 d-flex justify-content-center flex-column align-items-center'>
            <div className="m-3 divide-y divide-teal-400 md:divide-pink-400  d-flex justify-content-center flex-column align-items-center">
            <h2 className='ml-3 toptwotext text-3xl text-rose-500 hover:text-indigo-600 '>
                Reach Us
            </h2>
            <div className="d-flex justify-content-left flex-column align-items-left">

            <h5 className='text-emerald-600 text-xl'><AiOutlineMail style={iconStyles}/> info@silverlinepos.com</h5>
            <h5 className='text-emerald-600 text-xl'><FcMissedCall style={iconStyles}/> +977-9801456025</h5>
            <h5 className='text-emerald-600 text-xl'><GoLocation style={iconStyles}/> Kalimat, Kathmandu, Nepal</h5>
            </div>
            </div>
            <Divider className="mt-5"></Divider>
        </Panel>
        </div>

    <Scrolltotop />
<Footer />
    </div>
   
  );
}
