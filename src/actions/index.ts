import { TILE } from '../components/tile';

export enum ACTIONS {
	NEW_MOVE,
	ADD_TILE,
	CHANGE_TURN
}

interface Action { type: ACTIONS }

export interface ActionMove extends Action {
	i: number;
	j: number;
}

export interface ActionTile extends ActionMove {
	tile: TILE;
}

export interface ActionTurn extends Action {}

// action creators
export const newMove = (i: number, j: number): ActionMove => {
	return { type: ACTIONS.NEW_MOVE, i, j }
}

export const addTile = (i: number, j: number, tile: TILE): ActionTile => {
	return { type: ACTIONS.ADD_TILE, i, j, tile }
}

export const changeTurn = (): ActionTurn => {
	return { type: ACTIONS.CHANGE_TURN }
}
