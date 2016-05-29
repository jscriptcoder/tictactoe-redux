export enum SYMBOL { X, O }

export class TicTacToeGame {
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
}