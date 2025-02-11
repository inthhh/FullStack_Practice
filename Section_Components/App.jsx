import { Header } from "./Sections/Header";
import { Nav } from "./Sections/Nav";
import { Section } from "./Sections/Section";
import { Aside } from "./Sections/Aside";
import { Footer } from "./Sections/Footer";

export default function App() {
  return (
    <div className="w-[400px]">
      <Header />
      <Nav />
      <div className="flex">
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
