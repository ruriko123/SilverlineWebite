import React from "react";
import "./topmiddle.scss";
import { Panel } from "rsuite";
import "./bottommiddle.scss";
import { RiHotelLine } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { Carousel } from "rsuite";
import Image from "next/image";

import salespro from "../../public/salespro.jpg";
import salespro2 from "../../public/salespro2.jpg";

function RetailServicesBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y  divide-blue-200  mt-5 md:w-2/5  h-2/3 sm:h-auto  m-auto">
      <div className="card border-dark bg-gray-800 m-3  rounded  w-auto">
        <Carousel
          autoplay
          className="custom-slider w-auto h-auto bg-gray-800  mt-3 "
          shape="bar"
          as="div">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-2/3  d-flex justify-center align-middle  bg-gray-800 "
            src={salespro}
            priority={true}
            alt="experience"
          />
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="h-auto d-flex justify-center align-middle  bg-gray-800 "
            src={salespro2}
            priority={true}
            alt="experience"
          />
        </Carousel>
        <div className="card-body bg-gray-800 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
          <h4 className="card-title">
            <RiHotelLine />
          </h4>
          <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1 text-center">
            SalesPro
          </p>
          <p className="card-text text-center mt-3 ">
            <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
              Perfect for retail stores any size.
            </small>
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default RetailServicesBottomMiddle;
