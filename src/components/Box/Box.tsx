/**
 * Box Component - Used for Individual Content
 */
import React from "react";

type BoxProps = {
  stepValue: number;
  onPageChange: (
    value: string | number | React.MouseEventHandler<HTMLParagraphElement>
  ) => void;
};

function Box(props: BoxProps) {
  return <div className="box" onClick={() => props.onPageChange(props.stepValue)}>Step {props.stepValue}</div>;
}

Box.defaultProps = {
  isOpen: false,
};

export default Box;
