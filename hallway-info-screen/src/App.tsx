import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <iframe
        className="busTable"
        id="inlineFrameExample"
        title="Inline Frame Example"
        frameBorder="0"
        src="https://avgangstavla.vasttrafik.se/?source=vasttrafikse-depatureboardlinkgenerator&stopAreaGid=9021014001200000"
      ></iframe>
    </main>
  );
}

export default App;
