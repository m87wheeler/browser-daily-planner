import { useContext } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";

// *** components
import Task from "../molecules/Task";

// *** styled components
const Wrapper = styled.div`
  padding: 0.1rem 0;
  background: #eee;

  ul {
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.1rem;
  }
`;

const HighlightTasks = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(TaskContext);

  // ? convert ISO or UTC date to unix
  const dateToUnix = (d) => {
    const date = new Date(d);
    const unix = date.getTime();
    return unix;
  };

  // ? filter tasks by matching date range and type
  const filteredTasks = state.tasks
    ? state.tasks.length &&
      state.tasks
        .filter((task) => task.type === props.type)
        .filter(
          (task) =>
            dateToUnix(task.date) >= state.date.from &&
            dateToUnix(task.date) < state.date.to
        )
    : [];

  return (
    <Wrapper>
      <ul>
        {filteredTasks.length
          ? filteredTasks.map((task) => <Task key={task._id}>{task.task}</Task>)
          : ""}
      </ul>
    </Wrapper>
  );
};

export default HighlightTasks;
