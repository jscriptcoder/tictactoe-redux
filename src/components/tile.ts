export enum TILE { EMPTY, X, O }

export const tile2String = (tile: TILE, toEmpty: boolean = true): string => {
	switch (tile) {
		case TILE.X: return 'X';
		case TILE.O: return 'O';
		case TILE.EMPTY: default: return toEmpty ? 'EMPTY' : '-';
	}
}

export const string2Tile = (tile: string): TILE => {
	switch (tile.toUpperCase()) {
		case 'X': return TILE.X;
		case 'O': return TILE.O;
		default: return TILE.EMPTY;
	}
}
