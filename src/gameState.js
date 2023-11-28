export default class GameState {
  constructor(size) {
    this.size = size;
    this.movesCount = 0;
    this.row = new Array(size).fill(0);
    this.col = new Array(size).fill(0);
    this.diagonal = new Array(2).fill(0);
    this.winner = null;
    this.isDraw = false;
  }
  handleMove(row, col, player) {
    console.log(this.row, this.col);
    if (player === "X") {
      this.row[row]++;
      this.col[col]++;
      if (row === col) {
        this.diagonal[0]++;
      }
      if (row + col + 1 === this.size) {
        this.diagonal[1]++;
      }
      if (
        this.row[row] === this.size ||
        this.col[col] === this.size ||
        this.diagonal[0] === this.size ||
        this.diagonal[1] === this.size
      ) {
        this.winner = "X";
      }
    } else {
      this.row[row]--;
      this.col[col]--;
      if (row === col) {
        this.diagonal[0]--;
      }
      if (row + col + 1 === this.size) {
        this.diagonal[1]--;
      }
      if (
        Math.abs(this.row[row]) === this.size ||
        Math.abs(this.col[col]) === this.size ||
        Math.abs(this.diagonal[0]) === this.size ||
        Math.abs(this.diagonal[1]) === this.size
      ) {
        this.winner = "O";
      }
    }
    this.movesCount++;
    if (this.movesCount === this.size * this.size && this.winner === null) {
      this.isDraw = true;
    }
    return {
      winner: this.winner,
      isDraw: this.isDraw
    };
  }
}
