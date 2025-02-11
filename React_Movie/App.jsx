import Header from "./movies/Header";
import "./movies/movieStyle.css";
import Nav from "./movies/Nav";
import Main from "./movies/Main";
import Footer from "./movies/Footer";

export default function App() {
  return (
    <>
      <div className="max_width">
        <Header />
      </div>
      <hr />
      <Nav />
      <div className="max_width">
        <Main />
      </div>
      <Footer />
    </>
  );
}
