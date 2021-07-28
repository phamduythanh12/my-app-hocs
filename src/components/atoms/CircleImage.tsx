
interface Props {
  src: string;
  width?: number;
  height?: number;
}

const defaultProps: Props = {
  src: "",
  width: 300,
  height: 300,
};

const CircleImage = (props: Props) => {
  return (
    <div
      className="display-image"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
      }}
    ></div>
  );
};

CircleImage.defaultProps = defaultProps;
export default CircleImage;
