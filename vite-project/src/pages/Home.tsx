import { useNavigate } from "react-router";
import { StyledHome, ButtonContainer } from "../styles/mainStyle";
import { ButtonStyle } from "../styles/headerStyle";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/main");
  };

  return (
    <StyledHome>
      <h1>Pocket Money</h1>
      <h2>
        <span>💰</span>
        <span>💸</span>
        <span>💷</span>
        <span>🤑</span>
        <span>💷</span>
        <span>💳</span>
      </h2>
      <ButtonContainer>
        <ButtonStyle onClick={handleExploreClick} className="explore">
          구경하기
        </ButtonStyle>
      </ButtonContainer>
    </StyledHome>
  );
};

export default Home;
