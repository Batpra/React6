import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Contact from "./components/Contact/contact";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
      </HashRouter>
      <Navbar />
      <Intro />
      <Contact />
    </div>
  );
}

export default App;
