import { useState } from "react";

export default function BoardCell({
  row,
  col,
  currentPlayer,
  setCurrentPlayer,
  onChange,
  winner
}) {
  const [cellValue, setCellValue] = useState(null);

  const handleClick = () => {
    setCellValue(currentPlayer);
    onChange(row, col, currentPlayer);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <button
      className="board-cell"
      onClick={handleClick}
      disabled={cellValue || winner}
    >
      {cellValue}
    </button>
  );
}
