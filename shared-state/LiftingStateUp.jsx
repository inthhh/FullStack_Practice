/**
 * State 끌어올리기 (Lifting State Up)
    개념
    리액트에서 state 끌어올리기는 여러 자식 컴포넌트가 동일한 데이터를 필요로 할 때
     상태를 공통 부모 컴포넌트로 끌어올려 한 곳에서 관리하는 패턴입니다.

    리액트는 단방향 데이터 흐름을 따르기 때문에, 상위 컴포넌트에서 상태를 관리하면 
    그 상태를 props를 통해 자식 컴포넌트에 전달하여 일관된 상태를 유지할 수 있습니다.
 */

/**
 * 예제 1: 두 입력 필드의 동기화 (상태 끌어올리기)
    문제:   
    두 개의 입력 필드가 있고, 두 입력 필드에 입력한 값을 상위 컴포넌트에서 
    한 번에 관리해야 합니다.
*/
import React, { useState } from "react";

// 자식 컴포넌트 1 - 첫 번째 입력 필드
function InputField1({ value, onChange }) {
  return (
    <div>
      <label>자식1: 입력 필드 1: </label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// 자식 컴포넌트 2 - 두 번째 입력 필드
function InputField2({ value, onChange }) {
  return (
    <div>
      <label>자식2: 입력 필드 2: </label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// 부모 컴포넌트 (상태 관리)
export function LiftingStateUp() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div>
      <h1>State 끌어올리기 예제</h1>
      <InputField1 value={text1} onChange={setText1} />
      <InputField2 value={text2} onChange={setText2} />
      <h3>부모:입력된 값 1: {text1}</h3>
      <h3>부모:입력된 값 2: {text2}</h3>
    </div>
  );
}

/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */

function Input1({ value, onChange }) {
  return (
    <div>
      <label>자식1: 입력 필드 1: </label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// 자식 컴포넌트 2 - 두 번째 입력 필드
function Input2({ value, onChange }) {
  return (
    <div>
      <label>자식2: 입력 필드 2: </label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function AddNumbers() {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);

  return (
    <div>
      <h1>State 끌어올리기 예제</h1>
      <Input1 value={text1} onChange={setText1} />
      <Input2 value={text2} onChange={setText2} />
      <h3>부모:입력된 값 1: {text1}</h3>
      <h3>부모:입력된 값 2: {text2}</h3>
      <h3>합 : {Number(text1) + Number(text2)}</h3>
    </div>
  );
}
/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */

function FruitsList({ items, onClick, selectedItems }) {
  return (
    <div>
      <h3>리스트 선택 및 연동</h3>
      <ul>
        {items.map((i) => (
          <li
            onClick={() => onClick(i)}
            style={{
              backgroundColor: selectedItems.includes(i) ? "skyblue" : "",
              fontWeight: selectedItems.includes(i) ? "bold" : "",
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 자식 컴포넌트 2 - 두 번째 입력 필드
function Selected({ selectedItems }) {
  return (
    <div>
      <h4>선택된 항목 : </h4>
      <ul>
        {selectedItems.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export function Parents() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지", "수박", "포도"]);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };
  return (
    <div>
      <FruitsList items={items} onClick={handleClick} selectedItems={selectedItems} />
      <Selected selectedItems={selectedItems} />
    </div>
  );
}
