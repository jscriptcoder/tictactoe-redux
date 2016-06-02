import './index.scss'
import { createStore } from 'redux'
import { newMove } from './actions'
import { tictactoe } from './reducers'
import { TILE } from './state/tile'
import TicTacToeGame from './state/tictactoe-game'
import TicTacToe from './components/tictactoe'

let store = createStore<TicTacToeGame>(tictactoe);

store.subscribe(() => {
	console.log(store.getState().toString() + '\n\n');
});

/*
store.dispatch(newMove(1, 1));
store.dispatch(newMove(0, 0));
store.dispatch(newMove(2, 0));
store.dispatch(newMove(0, 1));
store.dispatch(newMove(0, 2));
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
store.dispatch(newMove(1, 2));
*/

let game = new TicTacToe(document.getElementById('game'));