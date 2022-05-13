import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/work/Work";
import Testemonials from "./component/testemonials/Testemonials";
import Contact from "./component/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./component/menu/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menu={menuOpen} setMenu={setMenuOpen} />
      <Menu menu={menuOpen} setMenu={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testemonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
