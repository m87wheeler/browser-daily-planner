import { useContext } from "react";
import styled, { css } from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";

// *** components
import Button from "../atoms/Button";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.25rem;
  background: #ccc;
  cursor: pointer;

  &:hover {
    background: #566573;
    color: #fff;
  }

  span {
    padding: 0 0.25rem;

    &:nth-of-type(2) {
      width: 1rem;
      padding: 0.1rem 0.175rem;
      background: crimson;
      align-self: center;
      text-align: center;
      color: #fff;
    }
  }
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const TaskText = styled.span`
  ${(props) =>
    props.complete &&
    css`
      text-decoration: line-through;
      color: #777;
    `}
`;

const Task = ({ children, id, complete }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(TaskContext);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };
  const handleDelete = async (e) => {
    e.stopPropagation();
    const req = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    res.success
      ? dispatch({ type: "DELETE_TASK", payload: id })
      : dispatch({ type: "SET_SUCCESS", bool: false, message: res.message });
  };

  return (
    <Wrapper onClick={handleClick}>
      <TaskText complete={complete}>{children}</TaskText>
      <StyledButton danger small onClick={handleDelete}>
        X
      </StyledButton>
    </Wrapper>
  );
};

export default Task;
