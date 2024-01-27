import { useState } from "react";
import { MyContext } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import ReadyToStart from "./Components/Home-components/ReadyToStart";
export type MyContextProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};
function App() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ menu, setMenu }}>
      <BrowserRouter>
        <Header />
        {menu ? <Menu /> : ""}
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ReadyToStart />
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
