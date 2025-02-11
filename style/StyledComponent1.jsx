import React from "react";
import styled from "styled-components";
// styled-components 모듈 사용 : jsx-html 문법, SC는 CSS 문법을 그대로 따름
// 모듈 설치 : npm i styled-components

const Button = styled.button`
  // css 문법 사용
  color: white;
  padding: 10px;
  background-color: ${(props) => (props.dark ? "navy" : "blue")};
  border: 1px solid red;
`;

const RoundedButton = styled(Button)`
  border-radius: 12px;
`;

function StyledComponents1() {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton dark="dark">Normal</RoundedButton>
    </div>
  );
}

export default StyledComponents1;
