import './index.scss'
import { createStore } from 'redux'
import { newMove } from './actions'
import { tictactoe } from './reducers'
import { TILE } from './components/tile'
import { CellPosition } from './components/board'
import TicTacToeState from './state'
import TicTacToe from './components/tictactoe'

let tictactoeGame = new TicTacToe(document.getElementById('game'));
let store = createStore<TicTacToeState>(tictactoe);

tictactoeGame.onBoardClick((cellPos: CellPosition) => {
    // an interaction occurred. Let's change the state
	store.dispatch(newMove(cellPos.i, cellPos.j));
});

store.subscribe(() => {
	const tictactoeState = store.getState();
	console.log(tictactoeState + '\n\n');
	
    // the state has changed. Let's notify the view
    tictactoeGame.setTiles(tictactoeState.board);

	if (tictactoeState.isWinner()) {
		// todo
	}

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