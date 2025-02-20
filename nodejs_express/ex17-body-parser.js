const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("hello express");
});

// 바디파서 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // qs 모듈 사용

//req.body
// {
//   "name" : "hong",
//   "email" : "hong@mail.com",
//   "phone" : "010-1111-2222"
// }
app.post("/join", (req, res) => {
  res.status(200);
  console.log("받은 데이터", req.body);
  res.json({ message: "데이터가 성공적으로 수신됨", receivedData: req.body });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`);
});
