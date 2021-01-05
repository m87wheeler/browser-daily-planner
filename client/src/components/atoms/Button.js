import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Element = styled.button`
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;

  background: ${(props) =>
    props.secondary
      ? "#fff"
      : props.danger
      ? "crimson"
      : props.confirm
      ? "seagreen"
      : "#566573"};
  color: ${(props) => (props.secondary ? "#566573" : "#fff")};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = (props) => {
  return (
    <Element
      onClick={props.onClick}
      secondary={props.secondary}
      danger={props.danger}
      confirm={props.confirm}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </Element>
  );
};

export default Button;
