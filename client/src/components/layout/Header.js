import styled from "styled-components";

// *** data, hooks & context

// *** components
import DateScroller from "../molecules/DateScroller";
import Dashboard from "../views/Dashboard";
import Logo from "../views/Logo";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1vh 1rem;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Logo />
      <DateScroller />
      <Dashboard />
    </Wrapper>
  );
};

export default Header;
