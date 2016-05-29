import './index.scss'

import { createStore } from 'redux'
import { tictactoe } from './reducers'
import * as actions from './actions'
import { TicTacToeGame, string2Symbol } from './tictactoegame' 

let store = createStore<TicTacToeGame>(tictactoe);
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(actions.addSymbol(1, 1, store.getState().turn));
store.dispatch(actions.addSymbol(0, 0, store.getState().turn));