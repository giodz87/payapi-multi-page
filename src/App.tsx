import { useEffect, useState } from "react";
import { MyContext } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
export type MyContextProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};
function App() {
  const [menu, setMenu] = useState<boolean>(false);
  const [info, setInfo] = useState<[]>([]);
  const Api = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();

      if (response.ok) {
        setInfo(data);
      } else {
        setInfo([]);
      }
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <MyContext.Provider value={{ menu, setMenu }}>
      <BrowserRouter>
        <Header />
        {menu ? <Menu /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Pricing />} />
          <Route path="" element={<About />} />
          <Route path="" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
