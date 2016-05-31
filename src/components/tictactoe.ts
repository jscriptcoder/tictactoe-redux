import Board from './board'
import HTMLComponent from './htmlcomponent'

const TMPL = `
<div class="tictactoe">
	<h1>..:: Tic Tac Toe ::..<h1>
	<div class="tictactoe-inner">
		<div class="tictactoe-board"></div>
		<div class="tictactoe-info"></div>
	</div>
</div>
`;

export default class TicTacToe extends HTMLComponent {

	private board: Board;
	private title: HTMLHeadingElement;
	private info: HTMLElement;

	constructor(container: HTMLElement, size?: number) {
		super(container);
		this.buildDOM(size);
	}

	// easier to mock
	protected makeBoard(container: HTMLElement, size?: number): Board {
		return new Board(container, size);
	}

	protected buildDOM(size?: number) {
		this.el = HTMLComponent.string2Element(TMPL);
		this.title = <HTMLHeadingElement>HTMLComponent.findElement('.tictactoe-board');
		this.info = HTMLComponent.findElement('.tictactoe-info');
		this.board = this.makeBoard(HTMLComponent.findElement('.tictactoe-board'), size);
	}

}