import { TILE, tile2String } from '../components/tile'

// state of the game
export default class TicTacToeState {
	public winner: TILE;
	public board: TILE[][];
	public turn: TILE;

	constructor(size: number = 3) {
		this.winner = TILE.EMPTY;
		this.board = this.createBoard(size);
		this.turn = TILE.X;
	}

	public isLine(i: number, j: number): boolean {
		return this.isHorizontalLine(i) || this.isVerticalLine(j) || this.isDiagonalLine();
	}

	public isWinner(): boolean {
		return this.winner !== TILE.EMPTY;
	}

	public isTileEmpty(i: number, j: number): boolean {
		return this.board[i][j] === TILE.EMPTY;
	}

	public canPlay(i: number, j: number): boolean {
		return this.isTileEmpty(i, j) && !this.isWinner();
	}

	public isBoardFull(): boolean {
		for (let tiles of this.board) {
			for (let tile of tiles) {
				if (tile === TILE.EMPTY) return false;
			}
		}
		return true;
	}

	public isGameOver(): boolean {
		return this.isWinner() || this.isBoardFull();
	}

	// for debugging purposes
	public toString(): string {
		const size = this.board.length;
		let strGame = '+---+---+---+\n';

		for (let i = 0; i < size; i++) {
			strGame += '|   |   |   |\n';
			for (let j = 0; j < size; j++) {
				strGame += `| ${tile2String(this.board[i][j], false)} `;
			}
			strGame += '|\n|   |   |   |\n';
			strGame += '+---+---+---+\n';
		}

		if (this.isWinner()) {
			strGame += `Winner: ${tile2String(this.winner)}`;
		} else {
			strGame += `Turn: ${tile2String(this.turn)}`;
		}

		return strGame;
	}

	private createBoard(size: number): TILE[][] {
		let board = [];

		for (let i = 0; i < size; i++) {
			board[i] = [];
			for (let j = 0; j < size; j++) {
				board[i][j] = TILE.EMPTY;
			}
		}

		return board;
	}

	private isHorizontalLine(i: number): boolean {
		const size = this.board.length;
		let is = true;

		for (let j = 0; j < size; j++) {
			if (this.board[i][j] !== this.turn) {
				is = false;
				break;
			}
		}

		return is;
	}

	private isVerticalLine(j: number): boolean {
		const size = this.board.length;
		let is = true;

		for (let i = 0; i < size; i++) {
			if (this.board[i][j] !== this.turn) {
				is = false;
				break;
			}
		}

		return is;
	}

	private isDiagonalLine(): boolean {
		const size = this.board.length;
		let is: boolean;

		for (let i = 0; i < size; i++) {
			is = this.board[i][i] === this.turn;
			if (!is) break;
		}

		if (!is) {
			// let's check the other diagonal
			for (let i = 0, j = size - 1; i < size && j >= 0; i++ , j--) {
				is = this.board[i][j] === this.turn;
				if (!is) break;
			}
		}

		return is;
	}
}
