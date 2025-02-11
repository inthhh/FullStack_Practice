import React from "react";

export const E2 = React.createElement("h1", { className: "greeting" }, "리액트 엘리먼트2 내용");

export const E3 = <h1 style={{ color: "blue" }}>엘리먼트3</h1>;

const fruits = ["사과", "포도"];
export const E4 = (
  <ul>
    <li>사과</li>
    <li>포도</li>
  </ul>
);

export const E4_1 = (
  <ul>
    {fruits.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const handleClick = () => {
  console.log("버튼 클릭!");
};

export const E6 = (
  <div>
    <h1>
      <button onClick={handleClick}>click</button>
    </h1>
  </div>
);

export const Hello = (props) => {
  return <h1>안녕하세요 {props.name}님</h1>;
};

const Button = (p) => {
  return (
    <button style={{ color: p.color }}>
      {/* jsx 코멘트 : children은 props의 기본속성으로 컴포넌트 하위요소를 의미함 */}
      <b>child {p.children}</b>
    </button>
  );
};

export const ButtonCompo = (p) => {
  return (
    <div>
      <p>확인 버튼을 눌러주세요</p>
      <Button color="green">
        <span>확인</span>
        <span>취소</span>
      </Button>
    </div>
  );
};

// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

const user = {
  firstName: "김",
  lastName: "민수",
  age: 30,
};

export const NameCard = () => {
  return (
    <div style={{ margin: "20px" }}>
      {user.firstName}
      {user.lastName} 님은
      {user.age}살 입니다.
    </div>
  );
};

//연습문제2: props를 이용해 이름과 나이 출력하기
// 목표: props로 전달받은 이름과 나이를 사용자 정의 컴퍼넌트에 출력한다.
// 요구사항
// 1. Greeting 함수형 컴퍼넌트를 만들고, props로 전달받은 name과 age를
//   출력한다.
// 2. 출력양식 : 안녕하세요, 홍길동님! 당신의 나이는 25살입니다.

export const Greeting = (props) => {
  return (
    <div>
      <p>
        안녕하세요, {props.name}님! 당신의 나이는 {props.age}살 입니다.
      </p>
    </div>
  );
};

//연습문제3: 다음의 객체배열의 데이터를 출력하시오.
//목표: props로 전달받은 객체 배열의 데이터를 조작할 수 있다.
//요구사항
// 1. 상품이름 - 가격(원)으로 출력한다.
// 출력 예) 1. 노트북 - 8000원
//          2. 스마트폰 - 4000원
// const products = [
//   { id: 1, name: "노트북", price: 8000 },
//   { id: 2, name: "스마트폰", price: 4000 },
//   { id: 3, name: "태블릿", price: 6000 },
// ];

export const ProductList = (props) => {
  return (
    <div>
      {props.p.map((i, index) => (
        <div key={i.id}>
          {index + 1}. {i.name} - {i.price}원
        </div>
      ))}
    </div>
  );
};
