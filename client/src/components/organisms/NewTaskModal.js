import { useContext } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";
import { formatDateString } from "../../utils/dateFunctions";

// *** components
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Title from "../atoms/Title";

// *** styled components
const Wrapper = styled.div`
  display: ${(props) => (props.active ? "grid" : "none")};
  row-gap: 0.25rem;
  min-height: 10rem;
  min-width: 20rem;
  padding: 2rem 3rem;
  background: #fff;
  border: 0.25rem solid #566573;
  outline: 0.25rem solid #fff;
`;

const StyledTitle = styled(Title)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  &:first-child {
    text-align: left;
  }
`;

const Date = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  text-align: right;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  column-gap: 0.1rem;
  row-gap: 0.25rem;
`;

const NewTaskModal = (props) => {
  const [state, dispatch] = useContext(TaskContext);

  // ? event handlers
  const handleInput = (e) =>
    dispatch({ type: "CREATE_TASK", key: "task", value: e.target.value });
  const handleChange = (e) =>
    dispatch({ type: "CREATE_TASK", key: "type", value: e.target.value });
  const handleCancel = () =>
    dispatch({ type: "DISPLAY_MODAL", payload: false });
  const handleSubmit = async () => {
    const req = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.taskModel),
    });
    const res = await req.json();
    console.log(res);
    res.success
      ? dispatch({ type: "SUBMIT_TASK", payload: res._id })
      : dispatch({ type: "SET_SUCCESS", bool: false, message: res.message });
  };

  return (
    <Wrapper className={props.className} active={state.displayModal}>
      <StyledTitle>
        <span>New Task</span>
        <Date>{formatDateString(state.taskModel.date)}</Date>
      </StyledTitle>
      <InputContainer>
        <Input
          type="text"
          value={state.taskModel.task}
          placeholder="Task Text..."
          onInput={handleInput}
        />
        <Button onClick={handleSubmit} confirm={state.taskModel.task.length}>
          Add Task
        </Button>
        <Select
          value={state.taskModel.type}
          onChange={handleChange}
          options={[
            { value: "todo", text: "Daily Task" },
            { value: "social", text: "Social Media" },
            { value: "marketing", text: "Marketing" },
            { value: "important", text: "Don't Forget" },
            { value: "upcoming", text: "Next Week" },
          ]}
        />
        <Button danger onClick={handleCancel}>
          Cancel
        </Button>
      </InputContainer>
    </Wrapper>
  );
};

export default NewTaskModal;
