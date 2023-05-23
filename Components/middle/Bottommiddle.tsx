import React from "react";
import "./topmiddle.scss";
import { Panel, Placeholder, Divider, Row, Col } from "rsuite";
import "./bottommiddle.scss";
import { RiHotelLine } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import Link from 'next/link';



function Bottommiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y  divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center">
      <div className="card-group w-100 ">

        <div className="card border-dark bg-gray-800 m-3  rounded">
          <div className="card-body bg-gray-800 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <RiHotelLine />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1 text-center"><Link href="/hotelManagement"> Hotel Management </Link></p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
              Silverline DOT Connect HMS.
              </small>
            </p>
          </div>
        </div>
        <div className="card border-dark bg-gray-800 rounded   m-3 ">
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <IoRestaurantOutline />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center"><Link href="/restaurantManagement"> Restaurant Management </Link></p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 ">
                Silverline DOT Connect, RMS and Respro.
           </small>

            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-dark bg-gray-800 m-3 rounded ">
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FiShoppingCart />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center"><Link href="/retailManagement"> Retail Management </Link></p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
              SalesPro. Perfect for retail stores any size.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3 ">
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center"><Link href="/banquetManagement"> Banquet Management </Link></p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Banquet management software
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-dark bg-gray-800 m-3 rounded ">
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <MdOutlineSoupKitchen />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center"><Link href="/cloudKitchen"> Cloud Kitchen Platforms </Link></p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Cloud Kitchen software.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3 ">
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">Delivery Services</p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Delivery management software
              </small>
            </p>
          </div>
        </div>
      </div>

    </Panel>
  );
}

export default Bottommiddle;
