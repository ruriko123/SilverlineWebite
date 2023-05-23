'use client';
import "./AboutTimeline.scss";
import React from "react";
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CheckIcon from '@rsuite/icons/legacy/Check';
import Speaker from '@rsuite/icons/Speaker';
import Tools from '@rsuite/icons/Tools';
import Search from '@rsuite/icons/Search';
import Send from '@rsuite/icons/Send';

function AboutTimeline() {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
      
      <div className=" m-3  d-flex justify-center bg-gray mb-5">
        
        <Timeline className="custom-timeline" endless as={"div"}>
    <Timeline.Item dot={<Send />}>
      <p className="capitalize toptitle text-indigo-500 text-bold text-3xl sm:text-2xl  underline underline-offset-8  decoration-teal-500  hover:decoration-wavy decoration-2">You Contact Us</p>
    </Timeline.Item>
    <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">We reach out to you</p>
    </Timeline.Item>

    <Timeline.Item dot={<Speaker />}>
    <p className="capitalize toptitle text-indigo-500 text-bold text-3xl sm:text-2xl  underline underline-offset-8  decoration-teal-500  hover:decoration-wavy decoration-2">Discussions are held</p>
    </Timeline.Item>
    <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">We showcase our products</p>
    </Timeline.Item>
    {/* <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">Product pricings are presented</p>
    </Timeline.Item> */}
    <Timeline.Item dot={<Search />}>
    <p className="capitalize toptitle text-indigo-500 text-bold text-3xl sm:text-2xl  underline underline-offset-8  decoration-teal-500  hover:decoration-wavy decoration-2">You pick the product/products</p>
    </Timeline.Item>
    <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">Wide variety of products customized just for your needs</p>
    </Timeline.Item>
    <Timeline.Item dot={<CheckIcon style={{ background: '#15b215', color: '#fff' }} />}>
    <p className="capitalize toptitle text-indigo-500 text-bold text-3xl sm:text-2xl  underline underline-offset-8  decoration-teal-500  hover:decoration-wavy decoration-2">Deployment</p>
    </Timeline.Item>
    <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">You will receive the product on time</p>
    </Timeline.Item>
    <Timeline.Item dot={<Tools />}>
    <p className="capitalize toptitle text-indigo-500 text-bold text-3xl sm:text-2xl  underline underline-offset-8  decoration-teal-500  hover:decoration-wavy decoration-2">Maintenance</p>
    </Timeline.Item>
    <Timeline.Item>
      <p  className="normal-case secondarytitle text-gray-400">Feedback and customization</p>
    </Timeline.Item>
  </Timeline>
      
      </div>



  );
}

export default AboutTimeline;
