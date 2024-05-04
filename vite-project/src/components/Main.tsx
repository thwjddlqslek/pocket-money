import React from "react";
import styled from "styled-components";

//메인 컨테이너 불필요 예상
const MainContainer = styled.div`
  //background : pink;
  display : flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`
const PocketContainer = styled.div`
  background : white;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 75vh;
  border : 2px solid #000;
  border-radius : 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

  & div{
    //background : pink;
    display: flex;
    width: 100%;
    //justify-content: space-around;
  }

  & select {
    width: 7rem;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 1rem;
  }
  
  & p {
    margin: 1.5rem 0 1.2rem 1rem;
  }
`
const ColorText = styled.div<{color: string}>`
  color: ${(props) => props.color};
`

const TotalContainer = styled.div`
  //background: pink;
  width: 100%;
  display: flex;
  justify-content: center;

  & div {
    width: 50%;
    //background: skyblue;
    //height: 1.5rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`
const ReportContainer = styled.div`
  //background: green;
  width: 80%;
  height: 75%;
  justify-content: center;
  display: flex;
  
  & > div {
    display: flex;
    width: 50%;
    //background: pink;
    height: 95%;
    border : 2px solid #000;
    border-radius: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
    flex-direction: column;
    overflow-y: auto;
  }
`
const OneReport = styled.h1`
  //background : green;
  width: 95%;
  min-height: 5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

`

const Main: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 3}, (_, index) => currentYear - index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
      <MainContainer>
        <PocketContainer>
          <div>
          <select>
          {years.map(year => (
            <option key={year} value={year}>{year} 년</option>
          ))}
        </select>
        <select>
          {months.map(month => (
            <option key={month} value={month}>{month} 월</option>
          ))}
        </select>
        <p>의 수입과 지출 내역</p>
        </div>
        <TotalContainer>
          <div>수입 : <ColorText color="#01A361">500,000 원</ColorText></div>
          <div>지출 : <ColorText color="#E12939">281,000 원</ColorText></div>
        </TotalContainer>
        <ReportContainer>
          <div>
            <OneReport>test</OneReport>
            <OneReport>test</OneReport>
            <OneReport>test</OneReport>

          </div>
          <div>
          <OneReport>test</OneReport>
            <OneReport>test</OneReport>
            <OneReport>test</OneReport>
            <OneReport>test</OneReport>
            <OneReport>test</OneReport>
          </div>
        </ReportContainer>
        </PocketContainer>
      </MainContainer>
    );
  };

export default Main;