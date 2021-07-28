import { useState } from "react";


const ContainerImage = (props: any) => {
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
        opacity: isHovered ? 1 : 0.5,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </div>
  );
};

export default ContainerImage;