import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 1001;
`;
export const ModalContent = styled.div<{ $modalColor: string }>`
  position: relative;
  width: 30rem;
  height: 24.5rem;
  border: 1px solid ${(props) => props.$modalColor};
  border-radius: 1rem;
  box-shadow: 0 10px 12px ${({ theme }) => theme.shadow};
  color: ${(props) => props.$modalColor};
  background: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1500;

  & button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    background-color: white;
    font-family: "Moneygraphy-Pixel", sans-serif;
    color: ${(props) => props.$modalColor};
    background: ${({ theme }) => theme.body};
  }

  & h1 {
    font-size: 1.8rem;
    text-align: center;
    //background-color: tomato;
    margin: 2rem 0 1rem;
  }

  & .form-grid {
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 1.5rem;
    max-width: 24rem;
  }
  & .form-grid label {
    width: 3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0 0;
  }
  & .form-grid h2 {
    width: 20rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0 0 0;
  }
  & .form-grid input {
    width: 100%;
    height: 2.7rem;
    padding: 1rem;
    border: 1px solid ${(props) => props.$modalColor};
    border-radius: 1rem;
    font-size: 1rem;
    outline: none;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Moneygraphy-Pixel", sans-serif;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    width: 20rem;
    height: 19rem;

    & h1 {
      font-size: 1.3rem;
    }
    & button {
      font-size: 1rem;
    }

    & .form-grid {
      gap: 1rem;
    }
    & .form-grid label {
      width: 2rem;
      font-size: 1rem;
      margin: 0.6rem 0 0;
    }
    & .form-grid h2 {
      width: 13rem;
      font-size: 1rem;
      margin: 0.8rem 0 0 0;
    }
    & .form-grid input {
      height: 1.2rem;
      font-size: 0.8rem;
    }
  }
`;

export const SmallDateSelector = styled.div<{ $modalColor: string }>`
  display: flex;
  justify-content: center;
  width: 22rem;

  .select-container {
    width: 24rem;
    margin: 0;
  }

  select {
    border: 1px solid ${(props) => props.$modalColor};
    //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-family: "Moneygraphy-Pixel", sans-serif;
    padding: 0.5rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 6rem;
    height: 2.7rem;
    box-shadow: none;
    margin: 0 0 0 1rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      //background: rgba(224, 229, 253, 0.7);
      background: rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb:active {
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 768px) {
    width: 16rem;
    margin: 0 0 0 2rem;

    select {
      width: 4rem;
      padding: 0 0 0 0.3rem;
      font-size: 0.8rem;
      height: 2.3rem;
      margin: 0 0 0 0.5rem;
    }
  }
`;

export const RegistButton = styled.div<{ $modalColor: string }>`
  font-size: 1.3rem;
  color: white;
  width: 8rem;
  height: 3rem;
  background-color: ${(props) => props.$modalColor};
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  display: flex;
  cursor: pointer;
  margin: 2rem 0 1rem;
  &:active {
    //border-color: #301db0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    width: 6rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

export const WelModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const WelModalContent = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 1rem;
  padding: 2rem;
  min-width: 400px;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 1s ease-out;
`;

export const WelModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const WelModalBody = styled.div`
  margin: 1.5rem 0;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
`;

export const WelModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
