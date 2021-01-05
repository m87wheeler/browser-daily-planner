import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.h2`
  width: 100%;
  padding: 0.25rem 1rem;
  background: #566573;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Title = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Title;
