import React, { useState, useEffect } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [number, setNumber] = useState(0);
  const [disable, setDisable] = useState(true);

  const handeChange = (e) => {
    setNumber(e.target.value);
    if (
      Number.isInteger(Number(e.target.value)) &&
      Number(e.target.value) > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <div className="App">
      {checkout ? (
        <PayPal value={number} />
      ) : (
        <div>
          <h1>あなたはいくら寄付してくれますか？</h1>
          <input type="number" onChange={handeChange} autoComplete="off" />
          <button
            disabled={disable}
            onClick={() => {
              setCheckout(true);
            }}
          >
            円を寄付
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
