import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Element = styled.input`
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #566573;
`;

const Input = ({ onInput, value, placeholder }) => {
  return (
    <Element
      type="text"
      value={value}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
};

export default Input;
