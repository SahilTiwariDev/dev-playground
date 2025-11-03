import { useState } from "react";

function App() {
  let [value, setvalue] = useState(10);
  let increaseFunc = () => {
    if (value < 20) {
      setvalue(value + 1);
    }
    else{
      alert("Value can't be more than 20")
    }
  };
  let decreaseFunc = () => {
    if (value > 0) {
      setvalue(value - 1);
    }
    else{
      alert("Value can't be negetive")
    }
  };

  return (
    <>
      <p>Value : {value}</p>
      <button onClick={increaseFunc}>Increase</button>
      <br />
      <button onClick={decreaseFunc}>Decrease</button>
    </>
  );
}

export default App;
