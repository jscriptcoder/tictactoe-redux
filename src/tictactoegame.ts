export enum SYMBOL { EMPTY, X, O }

export const symbol2String = (symbol: SYMBOL): string => {
	switch (symbol) {
		case SYMBOL.X: return 'X';
		case SYMBOL.O: return 'O';
		default: return '-';
	}
}

export const string2Symbol = (symbol: string): SYMBOL => {
	switch (symbol.toUpperCase()) {
		case 'X': return SYMBOL.X;
		case 'O': return SYMBOL.O;
		default: return SYMBOL.EMPTY;
	}	
}

export class TicTacToeGame {
	public winner: SYMBOL;
	public board: SYMBOL[][];
	public turn: SYMBOL;

	constructor(size: number = 3) {
		this.winner = SYMBOL.EMPTY;
		this.board = this.createBoard(size);
		this.turn = SYMBOL.X;
	}

	public isLine(i: number, j: number): boolean {
		return this.isHorizontalLine(i) || this.isVerticalLine(j) || this.isDiagonalLine();
	}

	public toString(): string {
		const size = this.board.length;
		let strGame = '+---+---+---+\n';

		for (let i = 0; i < size; i++) {
			strGame += '|   |   |   |\n';
			for (let j = 0; j < size; j++) {
				strGame += `| ${symbol2String(this.board[i][j])} `;
			}
			strGame += '|\n|   |   |   |\n';
			strGame += '+---+---+---+\n';
		}

		if (this.isWinner()) {
			strGame += `Winner: ${symbol2String(this.winner)}`;
		} else {
			strGame += `Turn: ${symbol2String(this.turn)}`;
		}

		return strGame;
	}

	public isWinner(): boolean {
		return this.winner !== SYMBOL.EMPTY;
	}

	public isCellEmpty(i: number, j: number): boolean {
		return this.board[i][j] === SYMBOL.EMPTY;
	}

	public canPlay(i: number, j: number): boolean {
		return this.isCellEmpty(i, j) && !this.isWinner();
	}

	private createBoard(size: number): SYMBOL[][] {
		let board = [];

		for (let i = 0; i < size; i++) {
			board[i] = [];
			for (let j = 0; j < size; j++) {
				board[i][j] = SYMBOL.EMPTY;
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
			for (let i = 0, j = size - 1; i < size && j >= 0; i++ , j--) {
				is = this.board[i][j] === this.turn;
				if (!is) break;
			}
		}

		return is;
	}
}