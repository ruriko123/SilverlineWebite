'use client';

import "./countupcomponent.scss";
import React from "react";
import { Panel, Placeholder, Divider, Row, Col } from "rsuite";
import { AiTwotoneStar } from "react-icons/ai";
import { ChatQuoteFill } from "react-bootstrap-icons";
import CountUp, { CountUpProps } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const NumberTransition = ({endtime}:any) => {
    return (
    <CountUp end={endtime}   redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp>
)
 }


function Countupcomponent() {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
      
      <div className="card-group underline underline-offset-8  decoration-pink-500  hover:decoration-dashed decoration-4">
        <div className="card border-light m-2 rounded">
          <div className=" sm:text-xs d-flex justify-content-center align-item-center gap-3 flex-row mx-auto card-body rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 w-full capitalize ">


            <div className="insidecard">
            <p className="card-text font-bold text-gray-700 sm:text-xs text-[18px] leading-7 mb-1"> <span className="text-emerald-800 text-lg"><NumberTransition endtime={1000}/></span> % Document Storage</p>
            </div>
         
            <div className="insidecard">
            <p className="card-text font-bold text-gray-700 sm:text-xs text-[18px] leading-7 mb-1"> <span className="text-emerald-800 text-lg "><NumberTransition endtime={200}/></span>+ Happy customers</p>
            </div>

            <div className="insidecard">
            <p className="card-text font-bold text-gray-700  sm:text-xs text-[18px] leading-7 mb-1"><span className="text-emerald-800 text-lg"> <NumberTransition endtime={10}/></span>+ Products</p>
            </div>

          </div>
        </div>

      
      </div>



  );
}

export default Countupcomponent;
