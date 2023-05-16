import React from "react";

import Progressbar from "@/Components/Faq/Progressbar";
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
function FaqBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <section className="blog text-gray-700 body-font">
    <div className="container px-5 mt-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-4xl  title-font mb-2 text-rose-600 font-bold capitalize"> Hi, How can we help ?</h1>
        <div className="mt-3 bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
      <Progressbar color={"#ffc107"}/>
      </div>

    </div>
  </section>
  );
}

export default FaqBottomMiddle;
