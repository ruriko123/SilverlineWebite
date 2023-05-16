import React from "react";

import Progressbar from "@/Components/Faq/Progressbar";
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
function PrivacypolicyBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <section className="blog text-gray-700 body-font">
    <div className="container px-5 mt-24 mx-auto">
      <div className="flex flex-wrap w-full mb-7 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-4xl  title-font mb-2 text-rose-600 font-bold capitalize">Privacy Policy</h1>
      <Progressbar color={"#84CC16"}/>
      </div>

    </div>
  </section>
  );
}

export default PrivacypolicyBottomMiddle;
