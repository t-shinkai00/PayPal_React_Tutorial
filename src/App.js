import React, { useState, useEffect } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [number, setNumber] = useState(0);

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
          <input
            type="number"
            onChange={(event) => setNumber(event.target.value)}
            autoComplete="off"
          />
          <button
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
