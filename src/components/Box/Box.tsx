/**
 * Box Component - Used for Individual Content
 */
import React from "react";

type BoxProps = {
  stepValue: number;
  onHandleBoxClick: () => void
};

function Box(props: BoxProps) {
  return (
    <>
      <div className="box" onClick={props.onHandleBoxClick}>Step {props.stepValue}</div>
    </>
  );
}

Box.defaultProps = {
  isOpen: false,
};

export default Box;
