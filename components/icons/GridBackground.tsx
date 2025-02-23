import React from "react";

const GridBackground = () => {
  return (
    <svg width="100%" height="100%" className="h-full w-full">
      <defs>
        <pattern
          id=":R9a5kulcq:"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect x="5.5" y="5.5" width="1" height="1" fill="#222222"></rect>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:R9a5kulcq:)"></rect>
    </svg>
  );
};

export default GridBackground;
