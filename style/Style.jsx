// 리액트에서 CSS 구현 방법
// 1. JS inline style 속성
// 2. styled-components 모듈 사용
// 3. tailwind css 모듈 사용

import React from "react";

function InlineStyle() {
  const boxStyle = {
    backgroundColor: "lightBlue",
  };
  return (
    <div style={boxStyle}>
      <h1>리액트 인라인 스타일 예제</h1>
      <p>JS 객체로 스타일을 적용하는 예제</p>
    </div>
  );
}

export default InlineStyle;
