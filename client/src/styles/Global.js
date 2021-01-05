import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
      width: 100%;
      height: 100%;
  }

  html, body, button, select, option {
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
  }

  ul {
      list-style-type: none;
  }
`;

export default GlobalReset;
