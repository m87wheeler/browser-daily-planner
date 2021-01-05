import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Element = styled.select`
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #566573;
`;

const Select = (props) => {
  return (
    <Element value={props.value} onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </Element>
  );
};

export default Select;
