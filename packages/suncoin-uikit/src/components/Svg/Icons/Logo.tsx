import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g>
        <title>Layer 1</title>
        <text fill="#E6C36A" stroke="#000" strokeWidth="0" x="926.57813" y="667" id="svg_1" fontSize="180" fontFamily="'Courier New', Courier, monospace" textAnchor="start" xmlSpace="preserve" fontWeight="bold" fontStyle="normal">BFAV</text>
      </g>
    </Svg>
  );
};

export default Icon;
