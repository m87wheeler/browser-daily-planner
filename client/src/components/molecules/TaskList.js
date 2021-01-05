import { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";
import { dateToUnix } from "../../utils/dateFunctions";

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

  ${(props) =>
    props.current &&
    css`
      border-bottom: 0.25rem solid #566573;
      padding-bottom: 0.1rem;
    `}
`;

const TaskList = (props) => {
  const [state, dispatch] = useContext(TaskContext);
  const [tasks, setTasks] = useState([]);

  // ? filter tasks based on type and date
  useEffect(() => {
    if (props.highlight) {
      setTasks(
        state.tasks
          .filter((task) => task.type === props.type)
          .filter(
            (task) =>
              dateToUnix(task.date) >= props.date &&
              dateToUnix(task.date) < props.date + 1000 * 60 * 60 * 24
          )
      );
    } else {
      setTasks(
        state.tasks
          .filter((task) => task.type === props.type)
          .filter(
            (task) =>
              dateToUnix(task.date) >= props.date &&
              dateToUnix(task.date) < props.date + 1000 * 60 * 60 * 24
          )
      );
    }
  }, [props.highlight, props.date, props.type, state.tasks]);

  // ? event handlers
  const handleClick = () =>
    dispatch({
      type: "DISPLAY_MODAL",
      payload: true,
      date: props.date ? props.date : state.date.from,
      taskType: props.type,
    });

  return (
    <Wrapper onClick={handleClick} current={state.date.current === props.date}>
      <ul>
        {tasks.length
          ? tasks.map((task) => (
              <Task key={task._id} id={task._id} complete={task.complete}>
                {task.task}
              </Task>
            ))
          : ""}
      </ul>
    </Wrapper>
  );
};

export default TaskList;
