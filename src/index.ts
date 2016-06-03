import './index.scss'
import { createStore } from 'redux'
import { newMove } from './actions'
import { tictactoe } from './reducers'
import { TILE } from './state/tile'
import { CellPosition } from './components/board'
import TicTacToeState from './state'
import TicTacToe from './components/tictactoe'

let store = createStore<TicTacToeState>(tictactoe);

store.subscribe(() => {
	console.log(store.getState() + '\n\n');
});

/*
store.dispatch(newMove(1, 1));
store.dispatch(newMove(0, 0));
store.dispatch(newMove(2, 0));
store.dispatch(newMove(0, 1));
store.dispatch(newMove(0, 2)); // last move
*/

/*
store.dispatch(newMove(0, 0));
store.dispatch(newMove(1, 0));
store.dispatch(newMove(0, 1));
store.dispatch(newMove(1, 1));
store.dispatch(newMove(0, 2)); // last move
store.dispatch(newMove(1, 2)); // won't happen
*/

/*
store.dispatch(newMove(1, 1));
store.dispatch(newMove(1, 0));
store.dispatch(newMove(0, 0));
store.dispatch(newMove(2, 2));
store.dispatch(newMove(2, 0));
store.dispatch(newMove(0, 2));
store.dispatch(newMove(2, 1));
store.dispatch(newMove(1, 2)); // last move
*/

let tictactoeGame = new TicTacToe(document.getElementById('game'));
tictactoeGame.onBoardClick((cellPos: CellPosition) => {
	store.dispatch(newMove(cellPos.i, cellPos.j));
});