import {
  Hero,
  About,
  Project,
  Contact,
} from "./components";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Project />
      <Contact />
    </MainLayout>
  );
}

export default App;
