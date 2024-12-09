import React from "react";
import { FaRegSadTear } from "react-icons/fa";
import { StyledNotFound } from "../styles/mainStyle";

const NotFound: React.FC = () => {
  return (
    <StyledNotFound>
      <div style={{ margin: "20px" }}>
        <FaRegSadTear size={50} />
      </div>
      <h1>페이지를 찾을 수 없어요!</h1>
      <br />
      <p>요청하신 페이지가 존재하지 않아요.</p>
    </StyledNotFound>
  );
};

export default NotFound;
