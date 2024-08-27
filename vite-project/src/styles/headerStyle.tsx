import styled, { keyframes, css } from "styled-components";

const bounce = keyframes`
0%, 80% {
  transform:  translateY(0);
}
50% {
  transform:  translateY(-20px); 
}
`;

const slideUp = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 1;
  }
  to {
    transform: translateY(0);
    opacity: 0;
  }
`;
export const StyledHeader = styled.div`
  background: rgba(224, 229, 253, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  z-index: 100; /* Blur 영향 받음 */
  top: 0;
  //transform: translateX(-50%);
  width: 75vw;
  height: 5rem;
  min-height: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  //border : 2px solid #000;
  border-radius: 2rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background-color 0.1s ease, color 0.1s ease, background 0.1s ease;

  h1 {
    font-size: 1.3rem;
    position: relative;
    text-align: center;
    right: 18rem;
    bottom: 1rem;
  }

  p {
    width: 25rem;
    text-align: center;
    //background-color: pink;
    font-size: 2.7rem;
    font-weight: 500;
    position: absolute;
    top: 25px;
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

export const ButtonStyle = styled.div`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  color: #431ef5;
  border: 1px solid #431ef5;
`;

export const LoginButtonStyle = styled(ButtonStyle)`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
`;

export const JoinButtonStyle = styled(ButtonStyle)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 1rem 0 0 1rem;
`;

export const LogoutButtonStyle = styled(ButtonStyle)`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 1rem;
  background: rgba(224, 229, 253, 0.9);

  //margin: 1rem 0 0 1rem;
`;

export const LoginModal = styled.div<{ $isVisible: boolean }>`
  width: 22rem;
  height: 15rem;
  background: #fff;
  border: 1px solid #431ef5;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 3.5fr; /* 레이블과 입력 필드의 열 크기 설정 */
  grid-template-rows: auto auto auto auto; /* 행의 크기 설정 */
  gap: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  margin: 4rem 0 0 1rem;
  padding: 2rem 2.5rem 2.5rem 2rem;
  color: #431ef5;
  box-shadow: 6px 8px 7px rgba(0, 0, 0, 0.15);
  animation: ${(props) =>
    props.$isVisible
      ? css`
          ${slideUp} 0.5s ease-out forwards
        `
      : css`
          ${slideDown} 0.5s ease-out forwards
        `};

  h1 {
    grid-column: 1 / -1;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #431ef5;
    margin: 0;
    align-items: center;
    //justify-content: center;
    display: flex;
  }

  .inputs {
    display: contents;
  }

  input {
    outline: none;
    border: 1px solid #431ef5;
    border-radius: 1rem;
    padding: 0.6rem;
    font-size: 1rem;
  }

  .buttons {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding-top: 1rem;
  }

  button {
    height: 2rem;
    border: none;
    border-radius: 1rem;
    background: white;
    font-family: "Noto Sans KR", sans-serif;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    outline: none;
  }

  #close {
    background-color: rgba(0, 0, 0, 0.1);
  }

  #login {
    background-color: rgba(0, 135, 79, 0.2);
  }

  #join {
    background-color: rgba(67, 30, 245, 0.15);
  }
`;

export const MyContainer = styled.div`
  width: 9rem;
  height: 8rem;
  background: #fff;
  border: 1px solid #431ef5;
  border-radius: 1rem;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  margin: 1rem 0 0 1rem;
  color: #431ef5;
  box-shadow: 5px 8px 7px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    margin: 1rem 0 0.5rem 0;
  }

  p {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
    font-size: 1rem;
    max-width: 8rem;
    word-wrap: break-word;
    word-break: break-word;
    //background: pink;
  }
`;

export const ThemeButton = styled.div`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  color: #431ef5;
  border: 1px solid #431ef5;
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
`;
