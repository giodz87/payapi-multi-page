import { useState } from "react";
import { MyContext } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
export type MyContextProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};
function App() {
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ menu, setMenu }}>
      <BrowserRouter>
        <Header />
        {menu ? <Menu /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
