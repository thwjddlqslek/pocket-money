import styled from "styled-components";
import { BigDateSelector } from "./mainStyle";

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
  backdrop-filter: blur(3px);
`;
export const ModalContent = styled.div`
  position: relative;
  width: 30rem;
  height: 25rem;
  border: 1px solid #431ef5;
  border-radius: 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  color: #431ef5;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    color: #431ef5;
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
    border: 1px solid #431ef5;
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

export const SmallDateSelector = styled(BigDateSelector)`
  display: flex;
  justify-content: center;
  width: 22rem;

  .select-container {
    width: 24rem;
    margin: 0;
  }
  
  select {
    font-size: 1rem;
    width: 6rem;
    height: 2.7rem;
    box-shadow: none;
    margin: 0 0 0 1rem;
  }
  }
`;

export const RegistButton = styled.div`
  font-size: 1.3rem;
  color: white;
  width: 8rem;
  height: 3rem;
  background-color: #431ef5;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  display: flex;
  cursor: pointer;
  margin: 2rem 0 1rem;
  &:active {
    border-color: #301db0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;
