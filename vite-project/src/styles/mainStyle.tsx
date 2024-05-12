import styled from "styled-components";

export const MainContainer = styled.div`
  //background : pink;
  display : flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  //height: 100%;
`
export const PocketContainer = styled.div`
  background : white;
  //display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 70vh;
  //border : 2px solid #000;
  border-radius : 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  & div{
    //background : pink;
    display: flex;
    width: 100%;
    //justify-content: space-around;
  }

  & select {
    width: 7rem;
    //border: 1px solid #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
export const ColorText = styled.div<{color: string}>`
  color: ${(props) => props.color};
`

export const TotalContainer = styled.div`
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
export const ReportContainer = styled.div`
  //background: green;
  width: 80%;
  height: 70%;
  justify-content: center;
  display: flex;
  
  div {
    display: flex;
    width: 50%;
    //background: pink;
    height: 95%;
    border : 1px solid #000;
    border-radius: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
    flex-direction: column;
    overflow-y: auto;
  }
`
export const OneReport = styled.h1`
  //background : green;
  width: 95%;
  min-height: 5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: column;
  align-items: column;

  h1 {
    font-size: 1rem;
  }
`

export const ChartContainer = styled.div`
  background : white;
  display: flex;
  //justify-content: center;
  //align-items: center;
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 75vh;
  //border : 2px solid #000;
  border-radius : 1rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  & div{
    //background : pink;
    display: flex;
    width: 100%;
    //justify-content: space-around;
  }

  & select {
    width: 7rem;
    //border: 1px solid #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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