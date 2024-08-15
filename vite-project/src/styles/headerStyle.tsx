import styled, { keyframes } from "styled-components";

const bounce = keyframes`
0%, 80% {
  transform: translateX(-50%) translateY(0);
}
50% {
  transform: translateX(-50%) translateY(-20px); 
}
`;
export const StyledHeader = styled.div`
  background: rgba(224, 229, 253, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100; /* Blur 영향 받음 */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 5rem;
  min-height: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  //border : 2px solid #000;
  border-radius: 2rem;
  color: #431ef5;
  cursor: pointer;
  transition: background-color 0.1s ease, color 0.1s ease, background 0.1s ease;

  & h1 {
    font-size: 1.3rem;
    position: absolute;
    top: 15px;
    left: 25%;
    transform: translateX(-50%);
  }

  p {
    width: 25rem;
    text-align: center;
    //background-color: pink;
    font-size: 2.7rem;
    font-weight: 500;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  &: hover {
    background: radial-gradient(
      rgba(223, 231, 253, 0.9),
      rgba(203, 200, 253, 0.9)
    );
  }

  &: active {
    animation: ${bounce} 0.5s ease;
  }
`;
