import { Header } from "./Puppy/Header";
import { Nav } from "./Puppy/Nav";
import { Aside } from "./Puppy/Aside";
import { Section } from "./Puppy/Section";
import { Footer } from "./Puppy/Footer";

export default function PuppyBlog() {
  return (
    <div className="w-[1000px] h-[700px] bg-cyan-200 ">
      <Header />
      <Nav />
      <div className="flex">
        <Aside />
        <Section />
      </div>
      <Footer />
    </div>
  );
}
