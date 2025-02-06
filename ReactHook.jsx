// 리액트 훅(React Hooks)은 함수형 컴포넌트에서도
// 클래스 컴포넌트의 기능(예: 상태 관리, 생명 주기 관리)을 사용할 수 있도록 도와주는 기능입니다.
// 훅은 리액트 v16.8부터 도입되었으며,
// useState, useEffect, useContext 등 다양한 훅이 제공됩니다.
//
// Hook이라는 영단어는 갈고리라는 뜻인데,
// 프로그래밍에서는 원래 존재하는 어떤 기능에 갈고리를 거는 것처럼
// 끼어 들어가 같이 수행되는 것

import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";

// useState 훅
export const Counter1 = () => {
  let cnt = 0; // 상태변수가 아니므로 리렌더링이 되지 않음
  return (
    <div>
      <h1>Counter : {cnt}</h1>
      <button onClick={() => cnt + 1}>count up</button>
    </div>
  );
};

export const Counter2 = () => {
  let [cnt, setCnt] = useState(0); // 상태변수 - 업데이트 시 리렌더링
  return (
    <div>
      <h1>Counter : {cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>count up</button>
    </div>
  );
};

// useEffect 훅
export const Counter3 = () => {
  let [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
    return () => {
      console.log("컴포넌트 언마운트");
    };
  }, []);

  useEffect(() => {}, [cnt]); // 의존성 변수(배열)

  return (
    <div>
      <p>{cnt}번 클릭했습니다.</p>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        증가
      </button>
      <button onClick={() => setCnt(cnt + 1)}>count up</button>
    </div>
  );
};

// useMemo 훅
export const Counter4 = () => {
  const [num, setNum] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // const [double, setDouble] = useState(0);

  const double = useMemo(() => {
    console.log("두 배 연산중...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h1>useMemo</h1>
      <h1>입력한 숫자 : {num}</h1>
      <h2>두 배 : {double}</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <br />
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="입력하세요" />
    </div>
  );
};

// 4. useCallback 훅
export const Counter5 = () => {
  const [num, setNum] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // const [double, setDouble] = useState(0);

  const double = useMemo(() => {
    console.log("두 배 연산중...");
    return num * 2;
  }, [num]);

  // useCallback으로 숫자 입력 핸들러(콜백함수) 메모
  // e : js 이벤트 객체
  const handleNumChange = useCallback(
    (e) => {
      console.log("useCallback 메모");
      setNum(parseInt(e.target.value));
    },
    [num]
  );

  return (
    <div>
      <h1>useMemo</h1>
      <h1>입력한 숫자 : {num}</h1>
      <h2>두 배 : {double}</h2>
      <input type="number" value={num} onChange={handleNumChange} />
      <br />
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="입력하세요" />
    </div>
  );
};

// useRef
export const Counter6 = () => {
  const [num, setNum] = useState(0);
  const clickCountRef = useRef(0); // useRef로 클릭 횟수 관리
  // clickCountRef는 컴포넌트가 리렌더링 될 때 같이 초기화되지 않는다
  // 리렌더링 발생시키지 않고 값만 유지한다
  const inputRef = useRef(null);

  const handleClick = () => {
    setNum((num) => num + 1);
    clickCountRef.current += 1;
    console.log("총 클릭 횟수", clickCountRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>counter : {num}</h2>
      <h2>버튼 클릭 횟수 : {clickCountRef.current}</h2>
      <input type="text" ref={inputRef} placeholder="입력하세요" />
      <button onClick={handleClick}>증가 및 입력창 포커스</button>
    </div>
  );
};
