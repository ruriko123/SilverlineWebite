import React, { useEffect, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from "rsuite";
import "./NavbarBottom.scss";
import { Animation, List, Whisper, Button, ButtonToolbar } from "rsuite";




function AboutNavbarBottom() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout1;
    if (!visible) {
      timeout1 = setTimeout(() => {
        setVisible(true);
      }, 600);
    }

    return () => {
      clearTimeout(timeout1);
      // setVisible(false);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center m-2 align-items-center place-items-  text-center h-screen">
      <Panel shaded={true} bodyFill={false} className="rounded w-auto break-normal d-flex justify-content-center align-items-center">
        <Animation.Slide
          transitionAppear={true}
          in={visible}
          placement="bottom"
          timeout={4400}>
          <h1 className="font text-4xl font-bold tracking-tightsm:text-6xl d-flex align-items-center justify-content-center text-slate-900  ">
            About Us  
          </h1>
        </Animation.Slide>

        <Animation.Slide
          transitionAppear={true}
          in={visible}
          placement="right"
          timeout={4400}>
          <div
            className="p-1 m-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert">
            <span className="font-black">Premium </span> Integrated Point Of Sale Software Solutions
          </div>
        </Animation.Slide>

        <Animation.Slide
          transitionAppear={true}
          in={visible}
          placement="left"
          timeout={4400}>
          <div
            className="break-normal p-1 m-2 mb-3 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
            role="alert">
            <span className="font-medium">With years of industry expertise, we have developed advanced software solutions that optimize business operations, elevate customer experiences, and fuel sustainable growth.</span>
          </div>
        </Animation.Slide>

      </Panel>
    </div>
  );
}
export default AboutNavbarBottom;
