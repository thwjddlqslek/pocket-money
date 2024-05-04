import * as h from "../styles/headerStyle";

interface HeaderProps {
  income: number;
  expenditure: number;
}

const Header: React.FC<HeaderProps>= ({income, expenditure}) => {
  const total = income - expenditure;
  const formattedTotal = total.toLocaleString('ko-KR');

    return (
      <h.StyledHeader>
        <h1>지금 내 자산은?</h1>
        <p>{formattedTotal} 원</p>
      </h.StyledHeader>
    ); 
  };

export default Header;