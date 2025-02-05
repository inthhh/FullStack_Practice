import React, { Component, useState, useEffect } from "react";
import axios from "axios";

//Lifecycle.jsx
// 리액트 라이프사이클의 개념
// 리액트의 라이프사이클은 컴포넌트가 생성되고, 업데이트되며,
// 제거될 때 일어나는 일련의 과정을 의미합니다.
// 클래스형 컴포넌트에서 더 명확하게 사용되었지만,
// 함수형 컴포넌트에서는 useEffect Hook을 통해 비슷한 동작을 구현할 수 있습니다.
//
// 리액트 컴포넌트 라이프사이클의 3단계
// 1. 마운트 (Mount): 컴포넌트가 처음 DOM에 추가될 때 발생하는 단계
// 2. 업데이트 (Update): 상태나 props가 변경되어 컴포넌트가 다시 렌더링될 때 발생하는 단계
// 3. 언마운트 (Unmount): 컴포넌트가 DOM에서 제거될 때 발생하는 단계
//
// 클래스형 컴포넌트의 주요 라이프사이클 메서드
// componentDidMount(): 컴포넌트가 처음 렌더링된 후 실행
// componentDidUpdate(): 컴포넌트가 업데이트된 후 실행
// componentWillUnmount(): 컴포넌트가 언마운트(제거)되기 직전에 실행

// export class LifecycleClass extends Component {
//   // 컴포넌트 상속?
//   constructor(props) {
//     // 자식생성자 함수
//     super(props); // 부모생성자 함수 호출
//     this.state = {
//       // 상태변수 선언
//       count: 0,
//     };
//   }
//   // 마운트 발생 시,
//   componentDidMount() {
//     console.log("컴포넌트 마운트 됨");
//   }
//   // 언마운트 발생 시,
//   componentWillUnmount() {
//     console.log("컴포넌트 언마운트 됨");
//   }
//   // 상태나 props 변경 시(update) 호출됨
//   componentDidUpdate() {
//     console.log("컴포넌트 업데이트 됨");
//   }
//   render() {
//     return (
//       <div>
//         <h1>리액트 라이프사이클 클래스형</h1>
//         <p>{this.state.count}</p>
//         <button
//           onClick={() => {
//             // setState : 클래스형 컴포넌트의 상태변경 함수
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// 요즘은 위와 같은 클래스형보다 함수형을 사용하고 있음

export const LifeCycle = () => {
  // 상태변수, 상태설정함수, 초기값
  const [timerState, setTimer] = useState(false);
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState(0); // 마운트, 언마운트
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    console.log("마운트됨");
    return () => {
      console.log("언마운트됨");
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((t) => t + 1);
    }, 1000);
    setTimerId(timer);
    return () => clearInterval(timer);
  }, []);

  const clickTimer = () => {
    if (!timerState) {
      clearInterval(timerId); // 타이머 정지
      setTimerId(0);

      setHistory((h) => count);
    } else {
      setCount(0);
      const newTimer = setInterval(() => {
        setCount((t) => t + 1);
      }, 1000);
      setTimerId(newTimer);
    }
    setTimer(!timerState);
  };

  // 조건부 렌더링
  // 1. if else
  // 2. 삼항연산자
  // 3. 논리연산자
  return (
    <div style={{ padding: "20px" }}>
      <h2>{count}</h2>
      <button style={{ margin: "10px" }} onClick={() => clickTimer()}>
        stop/restart
      </button>
      {timerState && history}
    </div>
  );
  // show가 참일때만 LifecylceClass를 보이게 함
};

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener

export const WindowFour = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // 언마운트 시 해제
    };
  }, []);

  return <h2>{width}px</h2>;
};

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

export const CallAPI = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return <div> {data ? JSON.stringify(data) : 0}</div>;
};
