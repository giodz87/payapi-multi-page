import { useState } from "react";
import { MyContext } from "./context";
export type MyContextProps = {};
function App() {
  const [count, setCount] = useState(0);

  return <MyContext.Provider value={{}}></MyContext.Provider>;
}

export default App;
