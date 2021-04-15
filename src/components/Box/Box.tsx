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

  const handlePageChange = () => props.onPageChange(props.stepValue);
  return <div className="box" onClick={handlePageChange} role="button" tabIndex={props.stepValue} onKeyDown={handlePageChange}>Step {props.stepValue}</div>;
}

Box.defaultProps = {
  isOpen: false,
};

export default Box;
