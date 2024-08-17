import styled from "styled-components";

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
  z-index: 999;
`;
export const ModalContent = styled.div<{ $modalColor: string }>`
  position: relative;
  width: 30rem;
  height: 25rem;
  border: 1px solid ${(props) => props.$modalColor};
  border-radius: 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.$modalColor};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  & button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.1rem;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    background-color: white;
    color: ${(props) => props.$modalColor};
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
    height: 1.8rem;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.$modalColor};
    border-radius: 1rem;
    font-size: 1rem;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
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
    font-weight: 600;
    padding: 0.5rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 6rem;
    height: 2.7rem;
    box-shadow: none;
    margin: 0 0 0 1rem;
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
`;
