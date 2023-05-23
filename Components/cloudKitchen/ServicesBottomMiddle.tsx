import React from "react";
import "./topmiddle.scss";
import { Panel, Placeholder, Divider, Row, Col } from "rsuite";
import "./bottommiddle.scss";
import { RiHotelLine } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import Image from "next/image";

import Dalle from "../../public/third.jpg";

function CloudKitchenServicesBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y  divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center">
      <div className="card-group w-100 ">
        <div className="card border-dark bg-gray-800 m-3  rounded">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-2/3 h-3/5 d-flex justify-center align-middle m-auto mt-3 bg-gray-600 "
            src={Dalle}
            priority={true}
            alt="experience"
          />
          <div className="card-body bg-gray-800 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <RiHotelLine />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1 text-center">
              Lorem ipsum dolor sit.
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                enim!
              </small>
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default CloudKitchenServicesBottomMiddle;
