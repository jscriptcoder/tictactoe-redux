import 'es6-shim';

import { SYMBOL, TicTacToeGame, isLine } from './tictactoegame'
import { ACTIONS, ActionSymbol, ActionTurn, changeTurn } from './actions'

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

export const tictactoe = (state: TicTacToeGame = initialState, action: ActionSymbol): TicTacToeGame => {
	switch (action.type) {

		case ACTIONS.ADD_SYMBOL:
			if (!state.board[action.i][action.j]) {
				let newState = new TicTacToeGame();
				newState.board = board(state.board, action);

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