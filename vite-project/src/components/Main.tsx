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
  height: 70vh;
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
    margin: 1.4rem 0 1.2rem 1rem;
  }
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
        </PocketContainer>
      </MainContainer>
    );
  };

export default Main;