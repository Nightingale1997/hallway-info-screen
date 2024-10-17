import "./App.css";

function App() {
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
