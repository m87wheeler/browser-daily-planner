import { useContext } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";
import Title from "../atoms/Title";
import Day from "../organisms/Day";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// *** components

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.title ? "auto 1fr" : "auto")};
  grid-template-columns: repeat(7, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.25rem;
`;

const StyledTitle = styled(Title)`
  grid-column: 1 / span 7;
`;

const DailyPlanner = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(TaskContext);

  return (
    <Wrapper title={props.title}>
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
      {days.map((day, i) => (
        <Day
          key={day}
          type={props.type}
          day={!props.day ? day : ""}
          date={state.date.from + i * 1000 * 60 * 60 * 24}
          includeHeaders={props.includeHeaders}
        />
      ))}
    </Wrapper>
  );
};

export default DailyPlanner;
