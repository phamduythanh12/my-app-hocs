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

const Image = (props: Props) => {
    return (
        <div 
        className="display-image"
        style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            backgroundImage: `url(${props.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px'
        }}
        >
        </div>
    )
}
Image.defaultProps = defaultProps;

export default Image