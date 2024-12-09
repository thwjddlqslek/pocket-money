import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MoneygraphyRounded from "../fonts/Moneygraphy-Rounded.ttf";
import MoneygraphyPixel from "../fonts/Moneygraphy-Pixel.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Moneygraphy-Rounded';
    src: url(${MoneygraphyRounded}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Moneygraphy-Pixel';
    src: url(${MoneygraphyPixel}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    height: 100vh;
    margin: auto;
    font-family: 'Moneygraphy-Pixel', 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    justify-content: center;
    background: ${({ theme }) => theme?.body || "#ffffff"};
  }
`;

export default GlobalStyle;
