// JSX란?
// JSX는 JavaScript XML의 약자로, React에서 UI를 정의하기 위해 사용되는 문법입니다.
// JSX는 HTML과 비슷해 보이지만 JavaScript 코드 안에서 작성되며 컴파일러에 의해 순수한 JavaScript로 변환됩니다.
// React 컴포넌트는 JSX로 UI 구조를 선언하고 이를 렌더링할 수 있습니다.
// 예를 들어, JSX를 사용하면 HTML 구조를 정의하는 것처럼 React 컴포넌트를 정의할 수 있습니다.

// 1. JSX의 주요 특징
// HTML과 비슷한 문법으로 UI를 정의할 수 있음
// 브라우저에서 직접 실행되지 않으며 Babel 같은 도구에 의해 JavaScript로 변환됨
// 동적 데이터 바인딩 가능 ({} 중괄호로 JavaScript 표현식을 삽입)
//
// 2. JSX의 장점
// 가독성: HTML과 비슷하여 코드를 이해하기 쉬움
// 직관적인 동적 데이터 렌더링: 중괄호를 사용해 JavaScript 변수를 쉽게 렌더링할 수 있음
// 컴포넌트 기반 개발: 작은 UI 컴포넌트를 재사용 가능하게 함

import React from "react";
// react 18이상에서는 import 없이도 jsx 사용 가능
// jsx 문법
export const E1 = <h1 className="greeting">hello jsx!</h1>;

// babel을 통해서 순수 js로 변환됨
export const E2 = React.createElement("h1", { className: "greeting" }, "hello jsx!");

export const E4 = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "hello"),
  React.createElement("p", null, "simple text")
);

// jsx 리스트 렌더링
const items = ["A", "b", "c"];
export const E7 = (
  <ul>
    {items.map((item) => {
      <li>{item}</li>;
    })}
  </ul>
);

// react 리스트 렌더링
export const E8 = React.createElement(
  "ul",
  null,
  items.map((i) => {
    return React.createElement();
  })
);

// Ex.jsx
// 연습문제

// export const Hello = (props) => {
//   return <div>안녕하세요, {props.name}님!</div>;
// };

// export const Sum = (props) => {
//   return Number(props.num1) + Number(props.num2);
// };

// export const DrinkMachine = (props) => {
//   if (props.price == 1000) {
//     return `${props.price}원 : 콜라`;
//   }
//   if (props.price == 2000) {
//     return `${props.price}원 : 사이다`;
//   }
//   return `물`;
// };

// export const Greeting = (props) => {
//   if (props.hour >= 5 && props.hour < 11) return "좋은 아침입니다!";
//   if (props.hour >= 12 && props.hour < 17) return "좋은 오후입니다!";
//   return "좋은 저녁입니다!";
// };

//Ex.jsx
const Greeting = (props) => {
  return (
    <div>
      <p>환영합니다, {props.name}님!</p>
    </div>
  );
};

export const GreetingParent = () => {
  return (
    <div>
      <Greeting name="홍길동" />
      <Greeting name="김리사" />
      <Greeting name="이제훈" />
    </div>
  );
};

const UserCard = (props) => {
  return (
    <div>
      <p>
        환영합니다, {props.name}/{props.age}/{props.job}
      </p>
    </div>
  );
};

export const UserCardParent = () => {
  return (
    <div>
      <UserCard name="홍길동" age="23" job="programmer" />
      <UserCard name="김리사" age="23" job="programmer" />
      <UserCard name="이제훈" age="23" job="programmer" />
    </div>
  );
};

const ItemList = (props) => {
  return (
    <div>
      <ol>
        {props.items.map((x) => (
          <li>{x}</li>
        ))}
      </ol>
    </div>
  );
};

export const ItemListParent = () => {
  const items = ["aa", "bb", "cc"];
  const items2 = ["aaa", "bbb", "ccc"];
  return (
    <div>
      <ItemList items={items} />
      <ItemList items={items2} />
    </div>
  );
};

const ClickButton = () => {
  alert("경고!");
};

export const ClickButtonParent = () => {
  return <button onClick={ClickButton}>클릭 시 경고</button>;
};

const InfoCard = (props) => {
  return (
    <div>
      {props.title}
      <br />
      {props.children}
    </div>
  );
};

export const InfoCardParent = () => {
  return (
    <div>
      <InfoCard title="제목1">
        <p>content11111</p>
      </InfoCard>
      <InfoCard title="제목2">
        <p>content22222</p>
      </InfoCard>
    </div>
  );
};
