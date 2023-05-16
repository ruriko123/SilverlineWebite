import React, { useRef , useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from "rsuite";
import "./NavbarBottom.scss";
import { Animation, List, Whisper, Button, ButtonToolbar } from "rsuite";
import VisibilitySensor from 'react-visibility-sensor';


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
        <List.Item href="/service1">Service1</List.Item>
        <List.Item href="/service2">Service2</List.Item>
        <List.Item href="/service3">Service3</List.Item>
        <List.Item href="/service4">Service4</List.Item>
      </List>
    </div>
  );
});
function NavbarBottom() {
const visible = useRef(true);



  return (
    <div className="d-flex justify-content-center m-2 align-items-center place-items-center h-screen">
      <Panel shaded={true} bodyFill={false} className="rounded">
        <Animation.Slide
          transitionAppear={false}
          in={visible.current}
          placement="bottom"
          timeout={1000}>
          <h1 className="font text-4xl font-bold tracking-tightsm:text-6xl d-flex align-items-center justify-content-center  text-slate-900  ">
            Text Effect 1
          </h1>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible.current}
          placement="right"
          timeout={1000}>
          <div
            className="p-1 m-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert">
            <span className="font-medium">Premium </span> Storage Space and
            Storage Solutions
          </div>
        </Animation.Slide>
        <Animation.Slide
          transitionAppear={false}
          in={visible.current}
          placement="left"
          timeout={1000}>
          <div
            className="p-1 m-2 mb-3 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
            role="alert">
            <span className="font-medium">Built for</span> Individuals,
            Startups, e-Commerce & Companies
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
