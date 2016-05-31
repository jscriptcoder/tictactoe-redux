import './index.scss'
import { createStore } from 'redux'
import { newMove } from './actions'
import { tictactoe } from './reducers'
import TicTacToe from './models/tictactoe'

let store = createStore<TicTacToe>(tictactoe);

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
store.dispatch(newMove(0, 2));
store.dispatch(newMove(1, 2)); // won't happen
*/

store.dispatch(newMove(1, 1));
store.dispatch(newMove(1, 0));
store.dispatch(newMove(0, 0));
store.dispatch(newMove(2, 2));
store.dispatch(newMove(2, 0));
store.dispatch(newMove(0, 2));
store.dispatch(newMove(2, 1));
store.dispatch(newMove(1, 2));
