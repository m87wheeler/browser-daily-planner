import { useContext, useEffect } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";

// *** components
import Highlight from "../organisms/Highlight";
import DailyPlanner from "../views/DailyPlanner";
import HighlightsTray from "../views/HighlightsTray";

// *** styled components
const Wrapper = styled.main`
  height: 88vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  row-gap: 0.5rem;
  padding: 0.5rem;
`;

const Main = () => {
  const [state, dispatch] = useContext(TaskContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const req = await fetch(
        `/api?from=${state.date.from}&to=${state.date.to}`
      );
      const res = await req.json();
      dispatch({ type: "POPULATE_TASKS", payload: res.tasks });
    };
    fetchTasks();
  }, [state.date.from, state.date.to, dispatch]);

  return (
    <Wrapper>
      <DailyPlanner type="todo" title="Daily Planner" includeHeaders />
      <DailyPlanner type="social" title="Social Media Planner" />
      <HighlightsTray>
        <Highlight title="Marketing" type="marketing" />
        <Highlight title="Don't Forget" type="important" />
        <Highlight title="Next Week" type="upcoming" />
      </HighlightsTray>
    </Wrapper>
  );
};

export default Main;
