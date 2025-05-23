import React, { useState } from "react";
import axios from "axios"; // axios import
//HTTP 통신 모듈 : axios
//모듈 설치 : npm i axios
//JS에서 HTTP통신하는 방법 3가지 : jQuery(ajax함수), fetch(), axios()

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //form태그의 submit기능을 막는다.

    // 셋 중 하나라도 입력이 되지 않으면?
    // 입력 데이터 유효성 검사
    if (!username || !password || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      //노드서버로 회원가입 데이터 전송
      const response = await axios.post(
        "http://localhost:3030/signup",
        {
          username, //http body에 들어가는 데이터
          password,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data); //상태코드 200 OK
      alert("Sign-up successful!");
    } catch (error) {
      //상태코드 3xx, 4xx, 5xx
      console.error("Error:", error);
      alert("An error occurred during sign-up.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        사용자명:
        <input type="text" value={username} onChange={handleChangeUsername} />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" value={password} onChange={handleChangePassword} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUpForm;
