import React from "react";
import "./topmiddle.scss";
import { Panel, Placeholder, Divider, Row, Col } from "rsuite";
import "./bottommiddle.scss";
import { RiHotelLine } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { Carousel } from "rsuite";
import Image from "next/image";

import Dalle from "../../public/third.jpg";
import TableManagement from "../../public/TableManagement.jpg";
import billingAndOrderManagement from "../../public/billingAndOrderManagement.png";
import billingAndOrderManagement2 from "../../public/billingAndOrderManagement2.png";
import inventoryDistribution from "../../public/inventoryDistribution.png";
import fndCosting from "../../public/fndCosting.png";
import fndCosting2 from "../../public/fndCosting2.png";
import centralKitchen from "../../public/centralKitchen.png";
import centralKitchen2 from "../../public/centralKitchen2.png";
import kitchendisplay from "../../public/kitchendisplay.png";
import webPortal from "../../public/webPortal.png";
import webPortal2 from "../../public/webPortal2.png";

import accounting from "../../public/accounting.png";
import accounting2 from "../../public/accounting2.png";

function RestaurantServicesBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y  divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center">
      <div className="card-group mt-5">
        <div className="card border-dark bg-gray-800 m-3  rounded">
          <Carousel
            autoplay
            className="custom-slider w-auto h-full bg-gray-800  mt-3 mb-6 "
            shape="bar"
            as="div">
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-full d-flex justify-center align-middle "
              src={billingAndOrderManagement}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-full d-flex justify-center align-middle "
              src={billingAndOrderManagement2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className=" card-body bg-gray-800 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <RiHotelLine />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1 text-center  mt-3">
              Billing and Order Management Module
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Take control of your business transactions and customer orders
                with our robust Billing and Order Management Module, providing
                you with the tools to effectively manage invoices, process
                payments, and track orders for seamless business operations.
                Efficiently track and fulfill customer orders, while maintaining
                accurate billing records and managing payment processing, all
                within our intuitive Billing and Order Management Module.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3  ">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className=" h-2/3 d-flex justify-center align-middle m-auto bg-gray-800  mt-3 "
            src={inventoryDistribution}
            priority={true}
            alt="experience"
          />
          <div className=" mt-3 card-body  d-flex justify-bottom flex-col rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 ">
            <h4 className="card-title">
              <IoRestaurantOutline />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Inventory Distribution And Management Module
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                The Inventory Distribution and Management Module is a robust
                software solution that enables businesses to efficiently track
                and manage inventory across multiple locations, ensuring optimal
                distribution and seamless inventory management processes.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-dark bg-gray-800 m-3 rounded ">
          <Carousel
            autoplay
            className="custom-slider w-auto h-auto mt-3 bg-gray-800 "
            shape="bar"
            as="div">
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800 "
              src={fndCosting}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800  "
              src={fndCosting2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FiShoppingCart />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              FNB Costing
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Supercharge your food and beverage business with our
                cutting-edge FNB Costing software, empowering you to
                effortlessly manage costs, optimize pricing, and maximize
                profitability.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3 ">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-6/8 h-3/5 d-flex justify-center align-middle m-auto mt-3 bg-gray-800 "
            src={kitchendisplay}
            priority={true}
            alt="experience"
          />
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Kitchen Display System
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Revolutionize your kitchen operations with our state-of-the-art
                Kitchen Display System, enhancing efficiency, accuracy, and
                collaboration in food preparation while reducing errors and
                ensuring timely order fulfillment.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-dark bg-gray-800 m-3 rounded ">
          <Carousel
            autoplay
            className="custom-slider w-auto h-auto mt-3 bg-gray-800 "
            shape="bar"
            as="div">
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle  bg-gray-800"
              src={webPortal}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle  bg-gray-800"
              src={webPortal2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <MdOutlineSoupKitchen />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Real time web portal
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Stay ahead of the game with our real-time web portal designed
                specifically for Kitchen Display Systems, offering live updates,
                seamless order management, and efficient communication,
                empowering your kitchen to deliver exceptional service and
                optimize operations.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3 ">
          <Carousel
            autoplay
            className="custom-slider w-auto h-auto mt-3 bg-gray-800 "
            shape="bar"
            as="div">
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800"
              src={centralKitchen}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800"
              src={centralKitchen2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Central Kitchen Management & Production Module
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Optimize your central kitchen operations with our all-in-one
                Management & Production Module, streamlining coordination,
                enhancing production processes, and simplifying inventory
                management across multiple locations.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-dark bg-gray-800 m-3 rounded ">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="h-3/5 d-flex justify-center align-middle m-auto mt-3 bg-gray-800 "
            src={TableManagement}
            priority={true}
            alt="experience"
          />
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <MdOutlineSoupKitchen />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Table And Layout Management
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Efficiently manage your restaurant's seating arrangements and
                enhance guest experiences with our intuitive Table Management
                system, allowing you to easily track and optimize table
                availability, reservations, and seating assignments in
                real-time.
              </small>
            </p>
          </div>
        </div>

        <div className="card border-dark bg-gray-800 rounded  m-3 ">
          <Carousel
            autoplay
            className="custom-slider w-auto h-auto mt-3 bg-gray-800 "
            shape="bar"
            as="div">
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800 "
              src={accounting}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800  "
              src={accounting2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body d-flex justify-bottom flex-col rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              {" "}
              Cloud Accounting Portal
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Simplify your accounting processes with our user-friendly Cloud
                Accounting Portal, offering secure access to your financial data
                anytime, anywhere, empowering you to streamline transactions,
                track expenses, and make informed financial decisions with ease.
              </small>
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default RestaurantServicesBottomMiddle;
