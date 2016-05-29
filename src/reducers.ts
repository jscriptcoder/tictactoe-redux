import { combineReducers } from 'redux'
import { SYMBOL, TicTacToeGame } from './tictactoegame'
import { ACTIONS, ActionSymbol, ActionTurn } from './actions'

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

export default combineReducers({board, turn});