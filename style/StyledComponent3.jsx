import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: gray;
`;

const Title = styled.div`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function StyledComponent3() {
  return (
    <Wrapper>
      <Title>안녕하세요</Title>
    </Wrapper>
  )
}

export default StyledComponent3;
