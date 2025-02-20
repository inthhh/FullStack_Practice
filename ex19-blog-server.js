const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

// MongoDB Atlas 연결
const MONGO_URI = "mongodb+srv://glass005533:sh006427@cluster0.buwtt.mongodb.net/posts";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("몽고디비 연결 성공"))
  .catch((err) => console.error(err));

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ content: String }],
});
const Post = mongoose.model("Post", PostSchema);

// 게시글 목록 조회 -> DB 조회를 해야하기 때문에 비동기 처리 : async 사용
app.get("/posts", async (req, res) => {
  try {
    // select * from posts
    // post 콜렉션의 모든 document list를 가져옴
    const posts = await Post.find(); // post 콜렉션의 모든 document list를 가져옴
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// 게시글 단건 조회
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//게시글 추가
app.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
//게시글 수정
app.put("/posts/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
//게시글 삭제
app.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "삭제 성공" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// 댓글 추가
app.post("/posts/:id/comments", async (req, res) => {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post Not Found" });
    }
    post.comments.push({ content });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`);
});
