//Ex.jsx

// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export const Missons = () => {
  const [inputText, setInputText] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [bg, setBg] = useState("");
  const [box, setBox] = useState("");
  const [cnt, setCnt] = useState(0);
  const [fruits, setFruits] = useState([]);

  const changeText = (e) => {
    setInputText((t) => e.target.value);
  };

  const changeBackground = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount % 3 === 0) {
      setBg("red");
      return;
    }
    if (clickCount % 3 === 1) {
      setBg("green");
      return;
    }
    setBg("blue");
  };

  const changeBox = (e) => {
    if (e.target.checked) setBox("체크됨");
    else setBox("체크 해제됨");
  };

  const lessTen = () => {
    if (cnt < 10) setCnt(cnt + 1);
  };

  const addToList = (e) => {
    setFruits([...fruits, e.target.textContent]);
  };

  return (
    <div>
      <div>
        <h2>1번</h2>
        <input type="text" onChange={changeText} style={{ marginRight: "10px" }} />
        {inputText ? inputText : "내용 없음"}
      </div>
      <h2>2번</h2>
      <div style={{ padding: "30px", backgroundColor: `${bg}` }}>
        <button onClick={() => changeBackground()}>배경색 바꾸기</button>
      </div>
      <div>
        <h2>3번</h2>
        <input type="checkbox" onChange={changeBox} />
        {box ? box : ""}
      </div>
      <div>
        <h2>4번</h2>
        <p>{cnt}</p>
        <button onClick={lessTen}>btn</button>
      </div>
      <div>
        <h2>5번</h2>
        <div>
          <button onClick={addToList}>apple</button>
          <button onClick={addToList}>banana</button>
          <button onClick={addToList}>cherry</button>
          <button onClick={addToList}>melon</button>
        </div>
        {fruits
          ? fruits.map((x) => {
              return <p style={{ marginRight: "10px" }}>{x}</p>;
            })
          : ""}
      </div>
    </div>
  );
};
