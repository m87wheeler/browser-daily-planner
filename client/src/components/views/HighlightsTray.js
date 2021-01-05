import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  column-gap: 0.25rem;
`;

const HighlightsTray = ({ children }) => {
  return <Wrapper cols={children.length}>{children}</Wrapper>;
};

export default HighlightsTray;
