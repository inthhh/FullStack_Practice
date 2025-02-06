import React, { useEffect, useState } from "react";
//Event.jsx

//리액트 이벤트 개요
//리액트에서 이벤트는 일반적인 HTML DOM 이벤트와 유사하지만 약간의 차이점이 있습니다.
//리액트 이벤트는 기본적으로 synthetic event(합성 이벤트) 시스템을 사용합니다.
//
// 리액트 이벤트의 특징
// 1. 합성 이벤트(SyntheticEvent):
// 리액트는 이벤트 핸들러에 전달되는 이벤트 객체가 브라우저의 기본 이벤트 객체를 래핑한 SyntheticEvent라는 것을 의미합니다.
// 2. 브라우저 간 호환성 보장: 다양한 브라우저 간 이벤트 처리를 신경 쓰지 않아도 됩니다.
// 3. DOM 요소에만 사용 가능: 커스텀 컴포넌트에는 직접 이벤트를 전달할 수 없습니다. 반드시 DOM 요소에만 onClick, onChange와 같은 이벤트를 사용할 수 있습니다.
// 4. 기본 동작 취소: 이벤트 핸들러에서 preventDefault() 또는 stopPropagation() 같은 메서드를 사용할 수 있습니다.

export const Event1 = () => {
  const [msg, setMsg] = useState("버튼 클릭");
  const handleClick = () => {
    setMsg("버튼이 클릭됨!");
  };
  const style = { textAlign: "center", marginTop: "50px" }; // 스타일 저장

  return (
    <div style={style}>
      <h3>{msg}</h3>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export const Event2 = () => {
  const [msg, setMsg] = useState("클릭하세요");
  const handleClick = (e, n) => {
    setMsg(`${n}번째 버튼이 클릭됨!`);
  };
  return (
    <div>
      <form action="http://myserver.com">
        <h3>{msg}</h3>
        <button onClick={(e) => handleClick(e, 1)}>첫번째 버튼</button>
        <button onClick={(e) => handleClick(e, 2)}>두번째 버튼</button>
      </form>
    </div>
  );
};

//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")
export const Ex1 = () => {
  const [mouse, setMouse] = useState(false);
  const [bg, setBg] = useState("white");
  const changeColor = (c) => {
    setBg(c);
  };

  useEffect(() => {
    if (mouse === true) {
      changeColor("lightblue");
      console.log("mouse in");
    } else {
      changeColor("white");
      console.log("mouse out");
    }
  }, [mouse]);

  return (
    <div
      style={{ padding: "30px", backgroundColor: `${bg}` }}
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      hover
    </div>
  );
};
//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export const Ex2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`이름: ${name}, 나이: ${age}`);
    setName("");
    setAge("");
  };
  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit}>
        <label>이름 </label>{" "}
        <input type="text" name="" id="name" onChange={(e) => setName(e.target.value)} value={name} />
        <br />
        <label htmlFor="">나이 </label>
        <input type="text" id="age" onChange={(e) => setAge(e.target.value)} value={age} />
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export const Ex3 = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    if (name.length < 10) setName(e.target.value);
  };
  return (
    <div style={{ padding: "30px" }}>
      <form>
        <label>이름 </label> <input type="text" name="" id="name" onChange={(e) => handleChange(e)} value={name} />
        <p>남은 글자 수 : {10 - name.length}자</p>
      </form>
    </div>
  );
};
