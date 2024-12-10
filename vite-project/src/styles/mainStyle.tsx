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

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const wave = keyframes`
  0%, 100% {
    transform: translateY(0) scale(0.7);
  }
  50% {
    transform: translateY(-15px) scale(1);
  }
`;

export const CommonContainer = styled.div`
  width: 70vw;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-radius: 1rem;
  box-shadow: 0 10px 12px ${({ theme }) => theme.shadow};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  //background: black;

  @media (max-width: 768px) {
    max-width: 90vw;
    min-width: 350px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.body};
  @media (max-width: 768px) {
    min-width: 350px;
  }
`;

export const PocketContainer = styled(CommonContainer)`
  > div {
    //background: pink;
    display: flex;
    flex-direction: row;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      //justify-content: center;
    }
  }
  & p {
    margin: 1.5rem 0 1.2rem 1rem;
  }
  & .title-button {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  & .date-title-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin-right: auto;
      flex-direction: column;
      font-size: 1.1rem;
    }
  }

  & .button-container {
    display: flex;
    //margin-left: auto;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 0;
    z-index: 999;

    @media (max-width: 768px) {
      margin-right: auto;
      padding-left: 1rem;
      z-index: 999;
    }
  }
`;

export const BigDateSelector = styled.div`
  & .select-container {
    width: 16rem;
  }

  & select {
    width: 7rem;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1.2rem;
    font-family: "Moneygraphy-Pixel", sans-serif;
    padding: 0.5rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 1rem;
    outline: none;
  }
`;

export const AddButton = styled.button<{ $bgColor: string }>`
  width: 4rem;
  height: 3rem;
  margin-right: 1rem;
  background-color: ${(props) => props.$bgColor};
  border: none;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  font-family: "Moneygraphy-Pixel";
  font-size: 0.9rem;
  &:active {
    border-color: #301db0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;
export const ColorText = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .total-container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  div {
    display: flex;
    width: 50%;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 1rem;

    div {
      display: flex;
      width: 50%;
      padding: 0.5rem 0 0 0;
    }
  }
`;
export const ReportContainer = styled.div`
  //background: pink;
  width: 80%;
  height: 28rem;
  min-height: 55px;
  justify-content: center;
  display: flex;
  //position: relative;
  > div {
    display: flex;
    width: 47%;
    min-height: 35px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 1rem;
    align-items: center;
    //justify-content: flex-start;
    margin: 0.5rem;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: ${({ theme }) => theme.scrollBar};
    }
    &::-webkit-scrollbar-thumb:active {
      border-radius: 2px;
      background: ${({ theme }) => theme.scrollActive};
    }
    @media (max-width: 768px) {
      width: 95%;
    }
  }
`;

export const BubbleIcon = styled.p`
  width: 13rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(235, 48, 1, 0.25);
  font-size: 14px !important;
  padding-left: 8px;
  border-radius: 8px;
  margin: 0 !important;

  button {
    color: #eb0130;
    background-color: transparent;
    border: 1px solid #eb0130 !important;
    width: 2rem !important;
    margin: 0 3px 0 0;
  }
`;

export const BubbleTail = styled.p`
  border-top: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 15px solid rgba(235, 48, 1, 0.15);
  border-bottom: 5px solid transparent;
  margin: 0 !important;
`;
export const OneReport = styled.h1`
  width: 95%;
  min-height: 4.5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  //border: 1px solid white;
  box-shadow: 3px 7px 10px ${({ theme }) => theme.shadow};
  display: flex;
  //position: relative;
  flex-direction: column;
  justify-content: center;
  //background-color: pink;

  .icon-box-container {
    display: flex;
    justify-content: flex-start;
  }
  .icon-box {
    //position: relative;
    width: 7rem;
    height: 1rem;
    //background-color: pink;
  }
  div {
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //background-color: skyblue;
  }
  input {
    margin-top: 0.5rem;
    height: 2rem;
    outline: none;
    background: rgba(224, 229, 253, 0.5);
    //border: 1px solid #431ef5;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  #input-content {
    width: 60%;
    text-align: center;
    margin-bottom: 0.7rem;
  }
  #input-amount {
    width: 20%;
    text-align: right;
    padding-right: 0.5rem;
    margin-bottom: 0.7rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  p {
    font-size: 1.1rem;
  }

  button {
    width: 3rem;
    height: 1.2rem;
    font-size: 0.8rem;
    border-radius: 1rem;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 0.7rem;
  }

  #date {
    width: 22%;
    text-align: left;
    padding-bottom: 0.7rem;
  }

  #content {
    width: 53%;
    word-wrap: break-word;
    text-align: center;
    padding-bottom: 0.7rem;
  }
  #amount-income {
    color: ${({ theme }) => theme.income};
    text-align: right;
    width: 25%;
    word-wrap: break-word;
    margin-right: 1rem;
    padding-bottom: 0.7rem;
  }
  #amount-spend {
    color: ${({ theme }) => theme.spend};
    text-align: right;
    width: 25%;
    word-wrap: break-word;
    margin-right: 1rem;
    padding-bottom: 0.7rem;
  }

  #update {
    color: #00874f;
    background-color: rgba(0, 135, 79, 0.3);
  }

  #save {
    color: #431ef5;
    background-color: rgba(67, 30, 245, 0.3);
  }

  #delete {
    color: #eb0130;
    background-color: rgba(235, 48, 1, 0.25);
  }
`;

// 상속 받는거 구현
export const ChartContainer = styled(CommonContainer)``;

// 스크롤 바
export const StyledScrollBar = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #808080;
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  font-size: 5rem;
  light-height: 3;

  div {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 6rem;
    margin-bottom: 1rem;
    animation: ${slideUp} 1s ease-out;

    &:hover {
      color: ${({ theme }) => theme.border};
    }
  }

  h2 {
    animation: ${slideUp} 1s ease-out;
    &:nth-child(2) {
      animation: none;
      span {
        display: inline-block;
        animation: ${wave} 2s ease-in-out infinite;
        transform-origin: center;

        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation-delay: 0.5s;
        }
        &:nth-child(3) {
          animation-delay: 1s;
        }
        &:nth-child(4) {
          animation-delay: 1.5s;
        }
        &:nth-child(5) {
          animation-delay: 2s;
        }
        &:nth-child(6) {
          animation-delay: 2.5s;
        }
        &:nth-child(7) {
          animation-delay: 3s;
        }

        &:hover {
          animation-play-state: paused;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${slideUp} 1s ease-out 0.3s backwards;
  margin-top: 2rem;
  & > div {
    animation: ${float} 3s ease-in-out infinite;
  }
`;
