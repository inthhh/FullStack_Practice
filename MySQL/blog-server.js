let express = require("express");
let app = express();
let mysql = require("mysql2");
const cors = require("cors");

//모듈 설치
//npm i nodemon express mysql
//npm i cors

//CORS 허용
app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect mysql database
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "blog",
});
conn.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to mysql node js.",
  });
});

// 📌 1. 게시글 목록 조회
app.get("/posts", async (req, res) => {
  conn.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 📌 2. 특정 게시글 조회
app.get("/posts/:id", async (req, res) => {
  conn.query(`SELECT * FROM posts WHERE post_no = ${req.params.id}`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 📌 3. 새 게시글 작성
app.post("/posts", async (req, res) => {
  const { id, title, content } = req.body;
  conn.query(`insert into posts values (${id},${title},${content})`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 📌 4. 게시글 수정
app.put("/posts/:id", async (req, res) => {
  const { title, content } = req.body;
  conn.query(
    `update posts set post_title=${title}, post_content=${content} where post_no=${req.params.id}`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    }
  );
});

// 📌 5. 게시글 삭제
app.delete("/posts/:id", async (req, res) => {
  conn.query(`delete from posts where post_no=${req.params.id}`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 📌 6. 댓글 추가
app.post("/posts/:id/comments", async (req, res) => {
  const { id, content, post_no } = req.body;
  conn.query(`insert into comments values (${id},${content},${post_no})`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log("Listening on port %d", port);
});

module.exports = app;
