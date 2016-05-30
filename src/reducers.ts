import 'es6-shim';

import { SYMBOL, TicTacToeGame} from './tictactoegame'
import { ACTIONS, ActionMove, ActionSymbol, ActionTurn, addSymbol, changeTurn } from './actions'

const initialState = new TicTacToeGame();

export const board = (state: SYMBOL[][] = initialState.board, action: ActionSymbol): SYMBOL[][] => {
	switch (action.type) {

		case ACTIONS.ADD_SYMBOL:
			let newState: SYMBOL[][] = state.slice();
			newState[action.i][action.j] = action.symbol;
			return newState;

		default:
			return state;
	}
}

export const turn = (state: SYMBOL = initialState.turn, action: ActionTurn): SYMBOL => {
	switch (action.type) {

		case ACTIONS.CHANGE_TURN:
			if (state === SYMBOL.X) {
				return SYMBOL.O;
			} else {
				return SYMBOL.X;
			}

		default:
			return state;
	}
}

export const tictactoe = (state: TicTacToeGame = initialState, action: ActionMove): TicTacToeGame => {
	switch (action.type) {

		case ACTIONS.NEW_MOVE:
			if (!state.board[action.i][action.j] && !state.isWinner()) {
				let newState = new TicTacToeGame();
				newState.board = board(state.board, addSymbol(action.i, action.j, state.turn));
				newState.turn = state.turn;

				if (newState.isLine(action.i, action.j)) {
					newState.winner = state.turn;
				} else {
					newState.turn = turn(state.turn, changeTurn())
				}

				return newState;
			}
			
		default:
			return state;
	}
}