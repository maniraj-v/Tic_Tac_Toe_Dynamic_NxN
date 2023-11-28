import { useMemo, useRef, useState } from "react";
import BoardCell from "./BoardCell";
import GameState from "./gameState";

export default function GameBoard({ size = 3, startWithPlayer = "X" }) {
  const boardSize = Math.max(2, size);
  const totalCells = boardSize * boardSize;
  const [currentPlayer, setCurrentPlayer] = useState(startWithPlayer);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const gameState = useMemo(() => {
    return new GameState(boardSize);
  }, []);

  const onChange = (row, col, player) => {
    const { winner, isDraw } = gameState.handleMove(row, col, player);
    setWinner(winner);
    setIsDraw(isDraw);
  };

  return (
    <section>
      {winner ? <p>Winner is {winner}</p> : null}
      {isDraw ? <p>Match Drawn</p> : null}
      {winner === null && isDraw === false ? (
        <p>Players turn : {currentPlayer}</p>
      ) : null}
      {/* Board */}
      <div
        className="board-container"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 60px)` }}
      >
        {Array.from({ length: boardSize }).map((_, row) => {
          return Array.from({ length: boardSize }).map((_, col) => {
            return (
              <BoardCell
                key={`${row}-${col}`}
                row={row}
                col={col}
                setCurrentPlayer={setCurrentPlayer}
                currentPlayer={currentPlayer}
                onChange={onChange}
                winner={winner}
              />
            );
          });
        })}
      </div>
    </section>
  );
}
