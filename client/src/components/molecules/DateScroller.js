import { useContext } from "react";
import styled from "styled-components";

// *** data, hooks & context
import { TaskContext } from "../../context/taskContext";
import Button from "../atoms/Button";

// *** components

// *** styled components
const Wrapper = styled.div`
  display: inline-grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr auto;
  gap: 0.25rem 0.5rem;

  h2 {
    min-width: 20rem;
    align-self: center;
    text-align: center;
  }
`;

const CurrentButton = styled(Button)`
  grid-column: 2 / 3;
  justify-self: center;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const DateScroller = (props) => {
  const [state, dispatch] = useContext(TaskContext);

  const handleDecrement = () => dispatch({ type: "DECREMENT_WEEK" });
  const handleIncrement = () => dispatch({ type: "INCREMENT_WEEK" });
  const handleReset = () => dispatch({ type: "CURRENT_WEEK" });

  return (
    <Wrapper>
      <StyledButton onClick={handleDecrement}>{"<"}</StyledButton>
      <h2>
        {new Date(state.date.from).toUTCString().substr(5, 11)} -{" "}
        {new Date(state.date.to).toUTCString().substr(5, 11)}
      </h2>
      <StyledButton onClick={handleIncrement}>{">"}</StyledButton>
      <CurrentButton onClick={handleReset}>Current Week</CurrentButton>
    </Wrapper>
  );
};

export default DateScroller;
