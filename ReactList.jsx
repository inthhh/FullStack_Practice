import React, { useEffect, useState } from "react";
import axios from "axios";

// List.jsx
//리액트에서 리스트와 키의 개념
// 리스트(List): 배열 데이터를 동적으로 렌더링하기 위해 사용되는 JSX 요소들의 집합
//  React에서는 배열의 각 항목을 JSX 엘리먼트로 변환하여 화면에 출력합니다.
// 키(Key): 리액트에서 각 리스트 항목을 고유하게 식별하기 위해 사용하는 속성입니다.
//  키는 리액트가 어떤 요소가 변경되었는지, 추가되었는지,
//  제거되었는지를 빠르게 파악하여 DOM을 효율적으로 업데이트하는 데
//  중요한 역할을 합니다.
export const NumberList = () => {
  const nums = [1, 2, 3, 4, 5];
  return (
    <>
      <p>Number List</p>
      <ul>
        {nums.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </>
  );
};

export const CategoryList = () => {
  const categorys = [
    {
      id: "fruits",
      name: "Fruits",
      items: ["Apple", "Banana", "Orange"],
    },
    {
      id: "fruits2",
      name: "Fruits2",
      items: ["Apple2", "Banana2", "Orange2"],
    },
  ];
  return (
    <>
      {categorys.map((category) => (
        <ul>
          {category.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ))}
    </>
  );
};

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "js 공부" },
    { id: 3, text: "node 공부" },
    { id: 4, text: "react 공부" },
  ]);

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, text: "새로운 할일" };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <div>
        {todos.map((t) => (
          <p>t.text</p>
        ))}
        <button onClick={() => addTodo()}>추가하기</button>
      </div>
    </>
  );
};

// 연습문제 1: 조건부 렌더링과 키 사용
// 아래의 tasks 배열을 활용하여, 완료된 작업과 완료되지 않은 작업을 분리하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 완료된 작업은 <h3>완료된 작업</h3> 아래에 리스트로 렌더링합니다.
// 2. 완료되지 않은 작업은 <h3>할 일 목록</h3> 아래에 렌더링합니다.
// 3. filter()함수를 사용하여, tasks 배열을 2개 생성후 사용한다.

export function TaskList() {
  const tasks = [
    { id: 1, text: "React 공부하기", completed: true },
    { id: 2, text: "운동하기", completed: false },
    { id: 3, text: "저녁 먹기", completed: false },
    { id: 4, text: "독서하기", completed: true },
  ];
  const taskCompleted = tasks.filter((t) => t.completed === true);
  const taskNotCompleted = tasks.filter((t) => t.completed === false);
  return (
    <>
      <div>
        <h3>완료된 작업</h3>
        <ul>
          {taskCompleted.map((t) => (
            <li>{t.text}</li>
          ))}
        </ul>
        <h3>할 일 목록</h3>
        <ul>
          {taskNotCompleted.map((t) => (
            <li>{t.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

//연습문제 2: 리스트 정렬과 키
// 아래의 products 배열을 가격 순으로 정렬하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 최저가부터 최고가 순으로 정렬하여 <ul>로 렌더링합니다.
// 2. 각 제품은 상품명 - 가격 형태로 표시합니다.
// 3. sort()함수를 사용합니다.

export function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Tablet", price: 800 },
  ];

  products.sort((a, b) => a.price - b.price);

  return (
    <>
      <ul>
        {products.map((p) => (
          <li>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </>
  );
}

//연습문제 3: 입력 폼과 리스트 추가
// 사용자가 입력한 새로운 항목을 리스트에 추가하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 초기 리스트는 빈 배열입니다.
// 2. 사용자가 입력하고 버튼을 누르면 입력한 항목이 리스트에 추가됩니다.
// 3. 각 리스트 항목은 고유한 키를 가져야 합니다.
export function DynamicList() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleAddItem = () => {
    setItemList([...itemList, newItem]);
  };

  return (
    <div>
      <h3>동적 리스트</h3>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="항목 입력" />
      <button onClick={handleAddItem}>추가하기</button>
      <h3>목록 리스트</h3>
      <ul>
        {itemList.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
// 연습문제4: jsonplaceholder사이트의 JSON응답을 리스트로 출력하시오.
//URL : https://jsonplaceholder.typicode.com/posts
// 요구사항
// 1. React로 jsonplaceholder.typicode.com/posts API를 호출하여
//    id, title, body를 출력하는 간단한 리스트를 구성하세요.
// 2. useEffect와 fetch: API 호출을 처리합니다.
// 3. useState: 데이터를 저장합니다.
// 4. 데이터 로딩 중 상태와 오류 처리도 간단히 포함합니다.
export const Mission4 = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div>
        <h3>4번</h3>
        <ul>
          {data
            ? data.map((d) => (
                <li>
                  {d.id} {d.title} {d.body}
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};
//연습문제5
//연습문제4에서 가져온 posts에다가
// 입력 폼을 통해 새로운 post를 동적으로 추가하고 초기에는 10개의 post만 보여주는 리액트 컴포넌트를 작성했습니다.
// 요구사항
// 1. 처음에는 API로 가져온 10개의 post만 보여줍니다.
// 2. 사용자가 입력 폼에 id, User ID, Title, Body를 입력하고 제출하면 새로운 post가 동적으로 추가됩니다.
export const Mission5 = () => {
  const [data, setData] = useState();
  const [post, setPost] = useState({ id: "", userId: "", title: "", body: "" });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data.slice(0, 10)))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };
  const addData = (e) => {
    setData(() => [...data, post]);
  };

  return (
    <>
      <div>
        <h3>5번</h3>
        <ul>
          {data
            ? data.map((d) => (
                <li>
                  {d.id} {d.title} {d.body}
                </li>
              ))
            : null}
        </ul>
        <h4>new data 작성</h4>
        <form action="">
          <label>id(number) </label>
          <input type="number" name="id" value={post.id} onChange={handleChange} /> <br />
          <label>User ID(number) </label>
          <input type="number" name="userId" value={post.userId} onChange={handleChange} />
          <br />
          <label>Title </label>
          <input type="text" name="title" value={post.title} onChange={handleChange} />
          <br />
          <label>body </label>
          <input type="text" name="body" value={post.body} onChange={handleChange} />
          <br />
          <button type="button" onClick={addData}>
            제출
          </button>
        </form>
      </div>
    </>
  );
};
