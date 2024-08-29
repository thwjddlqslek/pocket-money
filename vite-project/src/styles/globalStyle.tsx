import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

body {
    display: flex;
    height : 100vh;
    margin: auto;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    justify-content: center;
    background: ${({ theme }) => theme?.body || "#ffffff"};
}
`;
export default GlobalStyle;
