import React from "react";
import "./topmiddle.scss";
import { Panel, Placeholder, Divider, Row, Col } from "rsuite";
import "./bottommiddle.scss";
import { AiTwotoneStar } from "react-icons/ai";
import { ChatQuoteFill } from "react-bootstrap-icons";

function Bottommiddle() {
  let iconStyles = { color: "white", fontSize: "2.5em" };

  return (
    <Panel
      shaded
      className="mb-5 divide-y divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center">
      <div className="card-group w-100">
        <div className="card border-light m-3  rounded">
          <div className="card-body rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <ChatQuoteFill />
            </h4>
            <p className="card-text font-bold text-gray-700 text-[22px] leading-7 mb-1">Document Storage</p>
            <p className="card-text">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Store offsite and manage online
              </small>
            </p>
          </div>
        </div>
        <div className="card border-light rounded   m-3 ">
          <div className="card-body rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <ChatQuoteFill />
            </h4>
            <p className="card-text font-bold text-gray-700 text-[22px] leading-7 mb-1">Business Storage</p>
            <p className="card-text">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">24/7 Online Access</small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group  mt-5">
        <div className="card border-light m-3 rounded ">
          <div className="card-body rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <ChatQuoteFill />
            </h4>
            <p className="card-text font-bold text-gray-700 text-[22px] leading-7 mb-1">Retail and e-Commerce Storage</p>
            <p className="card-text">
              <small className="text-muted  hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                We'll receive, store, pick, pack and ship
              </small>
            </p>
          </div>
        </div>

        <div className="card border-light rounded  m-3 ">
          <div className="card-body rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            <h4 className="card-title">
              <ChatQuoteFill />
            </h4>
            <p className="card-text font-bold text-gray-700 text-[22px] leading-7 mb-1">Mero vault</p>
            <p className="card-text">
              <small className="text-muted hover:bg-[#F2ECE7] font-medium tracking-wide text-center capitalize hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Work, store, operate and ship all in one place
              </small>
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default Bottommiddle;
