import { useState } from "react";
import GameBoard from "./GameBoard";
import "./styles.css";

export default function App() {
  const [size, setSize] = useState(3);
  const [resetCount, setResetCount] = useState(0);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div>
        <input
          type="number"
          min={2}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => setResetCount((prev) => prev + 1)}
        >
          Reset
        </button>
      </div>
      <GameBoard size={size} key={`${size}-${resetCount}`} />
    </div>
  );
}
