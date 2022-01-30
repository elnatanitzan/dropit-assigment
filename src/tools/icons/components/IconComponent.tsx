import React from "react";

interface Props {
  d: string;
}

const IconComponent = ({ d }: Props) => {
  return (
    <svg
      style={{cursor: 'pointer'}}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path className="path" d={d} />
    </svg>
  );
};

export default IconComponent;
