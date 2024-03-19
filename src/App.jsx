import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyEditor from "./components/MyEditor";
import ReactPage from "./components/ReactPage/ReactPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test">hihihihih</div>
      <ReactPage />
      {/* <MyEditor /> */}
    </>
  );
}

export default App;
