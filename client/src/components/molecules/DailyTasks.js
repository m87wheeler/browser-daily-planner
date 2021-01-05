import { useContext } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";

// *** components
import Task from "../molecules/Task";

// *** styled components
const Wrapper = styled.div`
  align-self: stretch;
  padding: 0.1rem 0;
  background: #eee;

  &:hover {
    background: #ddd;
  }

  ul {
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.1rem;
  }
`;

const DailyTasks = (props) => {
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
            dateToUnix(task.date) >= props.date &&
            dateToUnix(task.date) < props.date + 1000 * 60 * 60 * 24
        )
    : [];

  // ?
  const handleClick = () =>
    dispatch({
      type: "DISPLAY_MODAL",
      payload: true,
      date: props.date,
      taskType: props.type,
    });

  return (
    <Wrapper onClick={handleClick}>
      <ul>
        {filteredTasks.length
          ? filteredTasks.map((task) => (
              <Task key={task._id} id={task._id} complete={task.complete}>
                {task.task}
              </Task>
            ))
          : ""}
      </ul>
    </Wrapper>
  );
};

export default DailyTasks;
