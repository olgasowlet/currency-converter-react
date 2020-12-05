import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
`;

export const theme = {
  fontColor: "#fabc2a",
  secondColor: "#262626"
};