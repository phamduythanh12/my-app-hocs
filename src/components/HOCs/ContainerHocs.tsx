/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

 function ContainerHocs(WrappedComponent: any, opacity11: any) {
  return function (props: any) {
    const [isHovered, setIsHovered] = useState(true);

    const onMouseEnter = () => {
      setIsHovered(false);
    };

    const onMouseLeave = () => {
      setIsHovered(true);
    };

    return (
      <div
        style={{
          opacity: isHovered ? 1 : opacity11,
          cursor: 'pointer'
        }}
        className="center-image"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default ContainerHocs;