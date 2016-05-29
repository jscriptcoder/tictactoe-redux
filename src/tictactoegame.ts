export enum SYMBOL { X, O }

export const symbol2String = (symbol: SYMBOL): string => {
	switch (symbol) {
		case SYMBOL.X: return 'X';
		case SYMBOL.O: return 'O';
		default: return 'X';
	}
}

export const string2Symbol = (symbol: string): SYMBOL => {
	switch (symbol.toUpperCase()) {
		case 'X': return SYMBOL.X;
		case 'O': return SYMBOL.O;
		default: return SYMBOL.X;
	}	
}

export class TicTacToeGame {
	public winner: SYMBOL;
	public board: SYMBOL[][];
	public turn: SYMBOL;

	constructor(size: number = 3) {
		this.board = this.createBoard(size);
		this.turn = SYMBOL.X;
	}

	private createBoard(size: number): SYMBOL[][] {
		let board = [];

		for (let i = 0; i < size; i++) {
			board[i] = [];
			for (let j = 0; j < size; j++) {
				board[i][j] = void 0;
			}
		}

		return board;
	}

	public isLine(i: number, j: number): boolean {
		return this.isHorizontalLine(i, j) || 
			this.isVerticalLine(i, j) || 
			this.isDiagonalLine(i, j);
	}

	private isHorizontalLine(i: number, j: number): boolean {}

	private isVerticalLine(i: number, j: number): boolean { }

	private isDiagonalLine(i: number, j: number): boolean { }
}