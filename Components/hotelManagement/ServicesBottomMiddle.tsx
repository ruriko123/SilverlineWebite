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
import frontoffice from "../../public/frontoffice.png";
import frontoffice2 from "../../public/frontoffice2.png";
import restaurantManagement from "../../public/restaurantManagement.jpg";
import restaurantManagement2 from "../../public/restaurantManagement2.jpg";

import accounting from "../../public/accounting.png";
import accounting2 from "../../public/accounting2.png";
import housekeeping1 from "../../public/housekeeping1.png";
import housekeeping2 from "../../public/housekeeping2.png";

function HotelServicesBottomMiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y  divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center">
      <div className="card-group w-100  ">
        <div className="card border-dark bg-gray-800 m-3  rounded">
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
              className="w-2/3 h-auto  d-flex justify-center align-middle bg-gray-800 "
              src={frontoffice}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="w-2/3 h-auto d-flex justify-center align-middle bg-gray-800 "
              src={frontoffice2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body bg-gray-800 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <RiHotelLine />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1 text-center">
              Front Office
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Enhance your hotel or hospitality business operations with our
                comprehensive Front Office software, providing a user-friendly
                platform for efficient management of guest check-ins,
                reservations, room assignments, and other essential front desk
                tasks, enabling you to deliver exceptional customer service and
                optimize guest experiences.
              </small>
            </p>
          </div>
        </div>
        <div className="card border-dark bg-gray-800 rounded   m-3 ">
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
              src={restaurantManagement}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="h-auto d-flex justify-center align-middle  bg-gray-800 "
              src={restaurantManagement2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <IoRestaurantOutline />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Restaurant managemet
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Our Restaurant Management Software is a comprehensive solution
                that streamlines your operations from menus to table management,
                inventory tracking, and order processing. It simplifies staff
                management, optimizes billing and payment processing, and
                enhances customer service through personalized profiles and
                effective team collaboration. With this software, you can
                increase efficiency, reduce costs, and deliver an exceptional
                dining experience that sets your restaurant apart.
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
            className="h-3/5 d-flex justify-center align-middle m-auto mt-3 bg-gray-800  "
            src={inventoryDistribution}
            priority={true}
            alt="experience"
          />
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FiShoppingCart />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Inventory Management
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Our Inventory Management Software automates and streamlines your
                inventory tracking and management processes. It provides
                real-time visibility into stock levels, simplifies procurement,
                and optimizes storage. With advanced analytics, you can make
                data-driven decisions to reduce stockouts, minimize excess
                inventory, and improve overall efficiency.
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
              className="d-flex justify-center align-middle  bg-gray-800 object-cover"
              src={housekeeping1}
              priority={true}
              alt="experience"
            />
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="auto"
              className="d-flex justify-center align-middle bg-gray-800 object-fit "
              src={housekeeping2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              House Keeping Module
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Optimize your housekeeping operations with our Housekeeping
                Module, designed to efficiently manage cleaning schedules, room
                assignments, and maintenance tasks. Enhance guest satisfaction
                and maintain a well-organized and inviting environment with our
                user-friendly solution.
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
              className="w-2/3 h-2/3 d-flex justify-center align-middle bg-gray-800   "
              src={fndCosting2}
              priority={true}
              alt="experience"
            />
          </Carousel>
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <MdOutlineSoupKitchen />
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
          <div className="card-body rounded-xl bg-gray-800 bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <FaRegBuilding />
            </h4>
            <p className="card-text text-emerald-500 font-black text-[22px] leading-7 mb-1  text-center">
              Web based Accounting Portal
            </p>
            <p className="card-text text-center mt-3 ">
              <small className="text-muted  d-flex justify-center hover:bg-[#F2ECE7] font-medium tracking-wide text-center hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Access your accounting functions anytime, anywhere with our
                user-friendly Web-Based Accounting Portal. Streamline your
                financial processes by tracking expenses, managing invoices, and
                generating detailed financial reports. Simplify your business
                accounting and gain better control of your finances with our
                convenient and accessible web-based solution.
              </small>
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default HotelServicesBottomMiddle;
