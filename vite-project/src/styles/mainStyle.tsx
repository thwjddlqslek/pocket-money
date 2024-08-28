import styled from "styled-components";

export const CommonContainer = styled.div`
  width: 70vw;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  //background: #f1f5f9;
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const PocketContainer = styled(CommonContainer)`
  //margin-top: 6rem;

  & > div {
    //background: pink;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  & p {
    margin: 1.5rem 0 1.2rem 1rem;
  }

  & .button-container {
    display: flex;
    //background-color: red;
    margin-left: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const BigDateSelector = styled.div`
  & .select-container {
    width: 16rem;
  }

  & select {
    width: 7rem;
    border: 1px solid ${({ theme }) => theme.text};
    //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
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
  font-family: "Noto Sans KR", sans-serif;
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
  //background: pink;
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    width: 50%;
    //background: skyblue;
    //height: 1.5rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
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
    border: 1px solid ${({ theme }) => theme.text};
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
      background: rgba(224, 229, 253, 0.7);
    }
    &::-webkit-scrollbar-thumb:active {
      border-radius: 2px;
      background: rgba(67, 30, 245, 0.5);
    }
  }
`;

export const BubbleIcon = styled.p`
  width: 13rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(235, 48, 1, 0.15);
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
  //border: 1px solid black;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.1);
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
    background: rgba(224, 229, 253, 0.7);
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
  #amount {
    color: #431ef5;
    text-align: right;
    width: 25%;
    word-wrap: break-word;
    margin-right: 1rem;
    padding-bottom: 0.7rem;
  }

  #update {
    color: #00874f;
    background-color: rgba(0, 135, 79, 0.2);
  }

  #save {
    color: #431ef5;
    background-color: rgba(67, 30, 245, 0.15);
  }

  #delete {
    color: #eb0130;
    background-color: rgba(235, 48, 1, 0.15);
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
