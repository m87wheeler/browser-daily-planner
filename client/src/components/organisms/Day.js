import styled, { css } from "styled-components";

// *** data, hooks & context

// *** components
import DayHead from "../atoms/DayHead";
import TaskList from "../molecules/TaskList";

// *** styled components
const Wrapper = styled.div`
  display: grid;

  ${(props) =>
    props.includeHeaders &&
    css`
      grid-template-rows: auto 1fr;
      row-gap: 0.25rem;
    `}
`;

const Day = (props) => {
  return (
    <Wrapper includeHeaders={props.includeHeaders}>
      {props.includeHeaders && <DayHead day={props.day} date={props.date} />}
      <TaskList type={props.type} day={props.day} date={props.date} />
    </Wrapper>
  );
};

export default Day;
