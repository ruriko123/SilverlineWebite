import React, {  useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from "rsuite";
import "./ServicesNavbarBottom.scss";
import { Animation, List, Whisper, Button, ButtonToolbar } from "rsuite";
import VisibilitySensor from 'react-visibility-sensor';
import FancyText from '@carefully-coded/react-text-gradient';
              






const ServicesNavbarBottom = ({firsttext,secondtext})=> {
const visible =true;



  return (
    <div className="d-flex text-center justify-content-center m-2 align-items-center place-items-center h-screen">
      <Panel shaded={true} bodyFill={true}  className="rounded">
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="bottom"
          timeout={1000}>
           <FancyText className="maintextanimation  font text-2xl font-black tracking-tightsm:text-6xl d-flex align-items-center justify-content-center  text-slate-900  "
 gradient={{ from: '#0c134f', to: '#FF6000' }}
 animateTo={{ from: '#0c134f', to: '#6d7195' }}
 animate
 animateDuration={1000}
    >
      Silverline
    </FancyText>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="left"
          timeout={1000}>
          <div
            className="p-1 m-3 mb-3 text-red-600   text-base drop-shadow-2xl testshadowclass	font-black dark:text-red-800"
            role="alert">
            {firsttext}
          </div>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="right"
          timeout={1000}>
          <div
            className="p-1 m-3 mb-3 text-emerald-600   text-base drop-shadow-2xl testshadowclass	font-black dark:text-red-800"
            role="alert">
            {secondtext}
          </div>
        </Animation.Slide>

      </Panel>
    </div>
  );
}
export default ServicesNavbarBottom;
