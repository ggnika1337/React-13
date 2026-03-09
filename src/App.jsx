import { useState } from "react";
import "./App.css";
import Container from "./components/__organisms/Container/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="px-[165px] w-full flex justify-between items-center self-center justify-self-center"> */}
        <Container />
      {/* </div> */}
    </>
  );
}

export default App;
