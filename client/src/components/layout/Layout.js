import styled from "styled-components";
import NewTaskModal from "../organisms/NewTaskModal";

// *** data, hooks & context

// *** components
import Header from "./Header";
import Main from "./Main";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 12vh 88vh;
`;

const NewTask = styled(NewTaskModal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NewTask />
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
