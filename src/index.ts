import './index.scss'

import { createStore } from 'redux'
import { tictactoe } from './reducers'
import { newMove } from './actions'
import { TicTacToeGame, string2Symbol } from './tictactoegame' 

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