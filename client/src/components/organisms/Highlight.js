import styled from "styled-components";

// *** data, hooks & context

// *** components
import Title from "../atoms/Title";
import TaskList from "../molecules/TaskList";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 0.25rem;
`;

const Highlight = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <TaskList type={props.type} highlight />
    </Wrapper>
  );
};

export default Highlight;
