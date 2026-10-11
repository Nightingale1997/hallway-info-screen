import "./App.css";

function App() {
  return (
    <main>
      <iframe
        className="busTable"
        id="inlineFrameExample"
        title="Inline Frame Example"
        frameBorder="0"
        src="https://avgangstavla.vasttrafik.se/?source=vasttrafikse-departureboardlinkgenerator&board1Gids=9021014006550000&board1Modules=departures&board1Modules=trafficSituations"
      ></iframe>
    </main>
  );
}

export default App;
