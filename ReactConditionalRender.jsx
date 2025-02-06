// ConditionalRender.jsx
// 조건부 렌더링
// 특정 조건에 따라 컴포넌트나 엘리먼트를 화면에 렌더링하는 기법입니다.
// 자바스크립트의 조건문(예: if-else, 삼항 연산자, 논리 연산자(AND) 등)을 활용하여
// 동적으로 UI를 제어할 수 있습니다.

//조건부 렌더링 방법
//1. if문 사용
//2. 삼항 연산자 (? :) 사용
//3. 논리 연산자 (&&, ||) 사용

import React, { useEffect, useState } from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  //1. if문 사용
  if (isLoggedIn == "true") {
    return <h3>환영합니다!</h3>;
  } else {
    return <h3>로그인이 필요합니다.</h3>;
  }
}

export function Conditional1(props) {
  return <Greeting isLoggedIn="true" />;
}

const style = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid green",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(p) {
  const { isLoggedIn, onClickLogin, onClickLogout } = p;
  return (
    <div style={style.wrapper}>
      {/* 2. 논리연산자 &&를 사용 */}
      {isLoggedIn && <span>환영합니다.</span>}
      {/* 3. 삼항연산자 사용 */}
      {isLoggedIn ? <button onClick={onClickLogout}>로그아웃</button> : <button onClick={onClickLogin}>로그인</button>}
    </div>
  );
}

export function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
    </div>
  );
}

//자바스크립트의 Truthy 값
// 자바스크립트에서 Truthy란 불리언 값으로 변환했을 때 true로 평가되는 값을 의미합니다.

// Falsy 값 목록
// 다음 값들은 falsy입니다.
// 이 값들은 if 문이나 조건부 연산에서 거짓(false)으로 평가됩니다:

// false          // boolean false
// 0              // 숫자 0
// -0             // 음수 0
// 0n             // BigInt 0
// ""             // 빈 문자열
// null           // null 값
// undefined      // undefined 값
// NaN            // 숫자가 아님 (Not-a-Number)
// * 위에 나열된 값 외에는 모두 truthy로 간주됩니다.

// Truthy 값의 예
// 다음과 같은 값들은 truthy로 평가됩니다:

// "문자열"          // 비어있지 않은 문자열
// 42                // 0이 아닌 숫자
// -1                // 음수도 truthy
// 3.14              // 소수도 truthy
// []                // 빈 배열도 truthy
// {}                // 빈 객체도 truthy
// function() {}     // 함수도 truthy
// new Date()        // Date 객체
// "false"           // 문자열 "false" (불리언 false와는 다름)

// 연습문제 1: UserProfile 조건부 렌더링
// 사용자 프로필 정보를 표시하는 UserProfile 컴포넌트를 작성하세요.
// 요구사항:
// props.user 객체가 존재하면 사용자 이름과 이메일을 렌더링합니다.
// props.user가 null 또는 undefined이면 "사용자 정보가 없습니다."라는 메시지를 렌더링합니다.
// 힌트: if-else 또는 삼항 연산자를 활용하여 조건부 렌더링을 구현합니다.

export const UserProfile = (p) => {
  const user = p.user;
  return <div>{user ? <div>{(user.name, user.email)}</div> : <div>사용자 정보가 없습니다</div>}</div>;
};

// 연습문제 2: Notification 컴포넌트 (삼항 연산자 사용)
// 문제:
// Notification 컴포넌트를 작성하여, 알림의 개수에 따라 메시지를 다르게 보여주세요.
// 요구사항:
// props.count가 0이면 "새로운 알림이 없습니다."를 렌더링합니다.
// props.count가 0보다 크면 "새로운 알림이 {count}개 있습니다."를 렌더링합니다.
// 힌트: 삼항 연산자를 사용하여 간결하게 구현할 수 있습니다.

export const Notification = (p) => {
  const cnt = p.count;
  return <div>{cnt === 0 ? <div>새로운 알림이 없습니다.</div> : <div>새로운 알림이 {cnt}개 있습니다.</div>}</div>;
};

// 연습문제 3: Advertisement 컴포넌트 (&& 연산자 사용)
// 문제:
// 프리미엄 회원이 아닐 때 광고를 표시하는 Advertisement 컴포넌트를 작성하세요.
// 요구사항:
// props.isPremium이 false일 때만 광고 영역을 렌더링합니다.
// 프리미엄 회원이면 아무것도 렌더링하지 않습니다.
// 힌트: 논리 연산자(&&)를 활용하여 조건이 참일 때만 광고 영역을 표시합니다.

export const Advertisement = (p) => {
  const isPremium = p.isPremium;
  return <div>{isPremium && <div>광고</div>}</div>;
};
