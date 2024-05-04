import styled from "styled-components";

export const StyledHeader = styled.div`
background : #3182F6;
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 30%;
box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

& h1 {
  position: absolute;
  top: 5%;
  left: 25%;
}

& p {
  font-size: 3rem;
  font-weight: 500;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
`