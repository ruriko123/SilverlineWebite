'use client';
import "./Contactus.scss";
import React from "react";
import {Panel, Divider, Row, Col } from 'rsuite';



function Contactus() {
  return (
    <Panel  shaded className='divide-y divide-blue-200 h-fit mt-3 d-flex justify-content-center flex-column align-items-center'>
    <div className="m-3 divide-y divide-teal-400 md:divide-pink-400  d-flex justify-content-center flex-column align-items-center">
    <h2 className='ml-3 toptwotext text-3xl '>
<a href="/contact" className="bg-amber-700 hover:bg-red-700 text-white py-2 px-4 rounded inline-flex items-center">
  <svg className="ml-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height={28} width={28}> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" /> <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" id="mainIconPathAttribute" /> </g> </svg>
  Contact Us
</a>
    </h2>
    </div>
</Panel>


  );
}

export default Contactus;
