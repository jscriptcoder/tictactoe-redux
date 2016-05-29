import { SYMBOL } from './tictactoegame';

export enum ACTIONS {
	ADD_SYMBOL,
	CHANGE_TURN
}

export interface ActionSymbol {
	type: ACTIONS;
	i: number;
	j: number;
	symbol: SYMBOL;
}

export interface ActionTurn {
	type: ACTIONS;
}

export const addSymbol = (i: number, j: number, symbol: SYMBOL): ActionSymbol => {
	return { type: ACTIONS.ADD_SYMBOL, i, j, symbol }
}

export const changeTurn = (): ActionTurn => {
	return { type: ACTIONS.CHANGE_TURN}
}