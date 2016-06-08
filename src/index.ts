import './index.scss'
import { createStore } from 'redux'
import { init, newMove } from './actions'
import { tictactoe } from './reducers'
import { TILE } from './components/tile'
import { CellPosition } from './components/board'
import TicTacToeState from './state'
import TicTacToe from './components/tictactoe'

let tictactoeView = new TicTacToe(document.getElementById('game'));
let store = createStore<TicTacToeState>(tictactoe);


// view interaction
tictactoeView.onBoardClick((cellPos: CellPosition) => {
	const tictactoeState = store.getState();

	if (tictactoeState.isGameOver()) {
		// restarts the game
		store.dispatch(init());
	} else if (cellPos.i >= 0 && cellPos.j >= 0) {
		// the user has clicked on the board. Let's change the state
		store.dispatch(newMove(cellPos.i, cellPos.j));
	}
});


// change of state
store.subscribe(() => {
	const tictactoeState = store.getState();
	console.log(tictactoeState + '\n\n');
	
    // the state has changed. Let's notify the view
    tictactoeView.setTiles(tictactoeState.board);

	if (tictactoeState.isWinner()) {
		// we have a winner
		tictactoeView.setWinner(tictactoeState.winner);
	} else if (tictactoeState.isBoardFull()) {
		// not possible to move
		tictactoeView.draw();
	} else {
		// next player
		tictactoeView.setTurn(tictactoeState.turn);
	}

});

// initial state
store.dispatch(init());