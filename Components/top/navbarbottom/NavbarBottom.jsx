import React, {  useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from "rsuite";
import "./NavbarBottom.scss";
import { Animation, List, Whisper, Button, ButtonToolbar } from "rsuite";
import VisibilitySensor from 'react-visibility-sensor';
import FancyText from '@carefully-coded/react-text-gradient';
              



const Overlay = React.forwardRef(({ style, onClose, ...rest }, ref) => {
  const styles = {
    ...style,
    color: "#000",
    background: "#fff",
    width: 200,
    padding: 10,
    borderRadius: 4,
    position: "absolute",
    border: "1px solid #ddd",
    boxShadow: "0 3px 6px -2px rgba(0, 0, 0, 0.6)",
  };
  return (
    <div {...rest} style={styles} ref={ref}>

      <List hover>
        <List.Item >Hotel Management</List.Item>
        <List.Item>Restaurant Management</List.Item>
        <List.Item>Retail Management</List.Item>
        <List.Item>Banquet Management</List.Item>
        <List.Item>Cloud Kitchen Platforms</List.Item>
        <List.Item>Delivery Services</List.Item>
      </List>
    </div>
  );
});
function NavbarBottom() {
const visible = true;



  return (
    <div className="d-flex text-center justify-content-center m-2 align-items-center place-items-center h-screen">
      <Panel shaded={true} bodyFill={true}  className="rounded">
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="bottom"
          timeout={1000}>
           <FancyText className="maintextanimation  font text-2xl font-black tracking-tightsm:text-6xl d-flex align-items-center justify-content-center  text-slate-900  "
 gradient={{ from: '#3BEEDD', to: '#2194B6' }}
 animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
 animate
 animateDuration={1000}
    >
      Silverline
    </FancyText>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="right"
          timeout={1000}>
          <div
            className="p-1 m-3 mb-3 text-amber-600   text-base drop-shadow-2xl testshadowclass	font-black dark:text-red-800"
            role="alert">
      <span className="font-black">Premium </span> Integrated Point Of Sale Software Solutions
          </div>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible}
          placement="left"
          timeout={1000}>
          <div
            className="p-1 m-3 mb-3 text-pink-600   text-base drop-shadow-2xl testshadowclass	font-black dark:text-red-800"
            role="alert">
            <span className="font-black">Built for</span> Restaurants, Hotels,
            Retail Shops, Trading Companies, and Delivery Services
          </div>
        </Animation.Slide>
        <ButtonToolbar
          style={{
            background: "transparent",
            padding: 10,
          }}
          className="rounded">
          <Whisper
            placement="auto"
            trigger="focus"
            speaker={(props, ref) => {
              const { className, left, top, onClose } = props;
              return (
                <Overlay
                  style={{
                    left,
                    top,
                  }}
                  onClose={onClose}
                  className={className}
                  ref={ref}
                />
              );
            }}>
            <Button color="violet" appearance="primary">
              Explore our services
            </Button>
          </Whisper>
        </ButtonToolbar>
      </Panel>
    </div>
  );
}
export default NavbarBottom;
