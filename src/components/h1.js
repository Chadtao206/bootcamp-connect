const H1 = (props) => (
  <h1 onClick={props.changeText} style={{ color: props.color }}>
    {props.text}
  </h1>
);

export default H1;
