import 'es6-shim';
import TicTacToeGame from './tictactoegame'
import { TILE } from './tile'
import {
	ACTIONS, 
	ActionMove, 
	ActionTile, 
	ActionTurn, 
	addTile, 
	changeTurn } from './actions'

const initialState = new TicTacToeGame();

export const board = (state: TILE[][] = initialState.board, action: ActionTile): TILE[][] => {
	switch (action.type) {

		case ACTIONS.ADD_TILE:
			let newState: TILE[][] = state.slice();
			newState[action.i][action.j] = action.tile;
			return newState;

		default:
			return state;
	}
}

export const turn = (state: TILE = initialState.turn, action: ActionTurn): TILE => {
	switch (action.type) {

		case ACTIONS.CHANGE_TURN:
			if (state === TILE.X) {
				return TILE.O;
			} else {
				return TILE.X;
			}

		default:
			return state;
	}
}

/****************
 * Main reducer *
 ****************/
export const tictactoe = (state: TicTacToeGame = initialState, action: ActionMove): TicTacToeGame => {
	switch (action.type) {

		case ACTIONS.NEW_MOVE:
			if (state.canPlay(action.i, action.j)) {

				let newState = <TicTacToeGame>Object.assign(new TicTacToeGame(), {
					board: board(state.board, addTile(action.i, action.j, state.turn)),
					turn: state.turn
				});

				if (newState.isLine(action.i, action.j)) {
					// game over
					newState.winner = state.turn;
					newState.turn = TILE.EMPTY;
				} else {
					newState.turn = turn(state.turn, changeTurn())
				}

				return newState;
			}
			
		default:
			return state;
	}
}