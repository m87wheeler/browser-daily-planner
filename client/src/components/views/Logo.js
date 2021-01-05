import styled from "styled-components";

// *** data, hooks & context
import logo from "../../images/primary-logo.png";

// *** components

// *** styled components
const Wrapper = styled.div``;
const MainLogo = styled.img`
  height: 10vh;
`;

const Logo = (props) => {
  return (
    <Wrapper>
      <a href="https://blue-interiors.com/">
        <MainLogo src={logo} alt="Blue Interiors Logo" />
      </a>
    </Wrapper>
  );
};

export default Logo;
