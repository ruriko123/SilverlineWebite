import React from 'react';
import "./topmiddle.scss";
import {Panel, Divider, Row, Col } from 'rsuite';

import { CiStar } from "react-icons/ci";
function Topmiddle() {
    let iconStyles = { color: "white", fontSize: "2.5em" };
    return (
        <Panel  shaded className='divide-y divide-blue-200 h-fit mt-3 d-flex justify-content-center flex-column align-items-center'>
            <div className="m-3 divide-y divide-teal-400 md:divide-pink-400  d-flex justify-content-center flex-column align-items-center">
            <h2 className='ml-3 toptwotext text-3xl text-center '>
            Explore Our Services
            </h2>
            <h5 className='text-xs text-white text-center mt-3'>Carefully put together for a hassle-free and affordable experience.</h5>
            </div>
            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>


        </Panel>
    )
    }

export default Topmiddle