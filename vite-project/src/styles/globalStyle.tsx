import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

body {
    display: flex;
    height : 100vh;
    margin: auto;
    //background : tomato;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    justify-content: center;
}
`;
export default GlobalStyle;
