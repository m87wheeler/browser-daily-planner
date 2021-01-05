import { useEffect, useState } from "react";
import styled from "styled-components";
import { clockTime, greeting } from "../../utils/dateFunctions";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: flex-end;
`;

const Clock = styled.h3`
  letter-spacing: 0.15rem;
  align-self: flex-end;
`;
const Greeting = styled.h4`
  text-transform: capitalize;
`;

const Dashboard = (props) => {
  const [time, setTime] = useState(clockTime());
  const [greet, setGreet] = useState(greeting("Agne"));

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(clockTime());
      setGreet(greeting("Agne"));
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <Wrapper>
      <Clock>{time}</Clock>
      <Greeting>{greet}</Greeting>
    </Wrapper>
  );
};

export default Dashboard;
