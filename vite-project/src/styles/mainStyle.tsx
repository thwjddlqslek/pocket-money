import styled from "styled-components";

export const CommonContainer = styled.div`
  width: 60vw;
  height: 72vh;
  border: 1px solid #431ef5;
  border-radius: 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  //background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150%;
`;

export const PocketContainer = styled(CommonContainer)`
  margin-top: 6rem;

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
    border: 1px solid #431ef5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 1rem;
    outline: none;
  }
`;

export const AddButton = styled.button<{ bgColor: string }>`
  width: 4rem;
  height: 3rem;
  margin-right: 1rem;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);

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
  width: 80%;
  height: 30rem;
  min-height: 55px;
  justify-content: center;
  display: flex;
  //position: relative;
  div {
    display: flex;
    width: 46%;
    min-height: 40px;
    border: 1px solid #431ef5;
    border-radius: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
    flex-direction: column;
    overflow-y: auto;
  }
`;
export const OneReport = styled.h1`
  //background : green;
  width: 95%;
  min-height: 4rem;
  margin: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 1.2rem;
    //background-color: red;
  }
`;

// 상속 받는거 구현
export const ChartContainer = styled(CommonContainer)``;
