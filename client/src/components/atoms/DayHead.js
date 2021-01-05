import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-content: center;

  p {
    height: 2.5rem;
    padding: 0.25rem;
    text-align: center;
    line-height: 1.75rem;
    border: 0.2rem solid #566573;

    &:first-of-type {
      color: #fff;
      background: #566573;
      font-weight: 600;
    }

    &:nth-of-type(2) {
      color: #566573;
      font-weight: 500;
      border-left: none;
    }
  }
`;

const DayHead = (props) => {
  const date = new Date(props.date).toString();
  return (
    <Wrapper>
      <p>{date.substr(8, 2)}</p>
      <p>{props.day}</p>
    </Wrapper>
  );
};

export default DayHead;
