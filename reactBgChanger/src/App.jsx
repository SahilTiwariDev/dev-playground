import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex h-screen justify-center items-end py-12">
        <div className="flex rounded-2xl shadow-2xl gap-3">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
