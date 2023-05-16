import React from "react";
import { useCountUp } from 'use-count-up'
import { Progress } from 'rsuite';


function Progressbar({color}:any) {
    const { value } = useCountUp({
        isCounting: true,
        end: 100,
        duration: 2,
      });

  return (
    <Progress.Line showInfo={false} percent={parseInt(`${value}`)} strokeColor={color} />
 
  );
}

export default Progressbar;
