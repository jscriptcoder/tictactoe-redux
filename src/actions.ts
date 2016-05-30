import { SYMBOL } from './tictactoegame';

export enum ACTIONS {
	NEW_MOVE,
	ADD_SYMBOL,
	CHANGE_TURN
}

interface Action { type: ACTIONS }

export interface ActionMove extends Action {
	i: number;
	j: number;
}

export interface ActionSymbol extends ActionMove {
	symbol: SYMBOL;
}

export interface ActionTurn extends Action {}

/*******************
 * Action Creators *
 *******************/
export const newMove = (i: number, j: number): ActionMove => {
	return { type: ACTIONS.NEW_MOVE, i, j }
}

export const addSymbol = (i: number, j: number, symbol: SYMBOL): ActionSymbol => {
	return { type: ACTIONS.ADD_SYMBOL, i, j, symbol }
}

export const changeTurn = (): ActionTurn => {
	return { type: ACTIONS.CHANGE_TURN }
}