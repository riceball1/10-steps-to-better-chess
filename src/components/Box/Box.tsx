/**
 * Box Component - Used for Individual Content
 */
import React from "react";

type BoxProps = {
  isOpen: boolean;
  stepValue: number;
};

function Box(props: BoxProps) {
  return (
    <>
      <div className="box">Step {props.stepValue}</div>
      {props.isOpen && <div>Content Showing</div>}
    </>
  );
}

Box.defaultProps = {
  isOpen: false,
};

export default Box;
