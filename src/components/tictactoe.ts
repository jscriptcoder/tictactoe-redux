import './tictactoe.scss';
import Component from './component'
import { CellPosition, Board } from './board'

const TMPL = `
<div class="tictactoe">
	<h1>..:: Tic Tac Toe ::..</h1>
	<div class="tictactoe-inner">
		<div class="tictactoe-board"></div>
		<div class="tictactoe-info"></div>
	</div>
</div>
`;

export default class TicTacToe extends Component {

	private board: Board;
	private title: HTMLElement;
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
		this.el = Component.string2Element(TMPL);
		this.title = this.findElement('h1');
		this.info = this.findElement('.tictactoe-info');
		this.board = this.makeBoard(this.findElement('.tictactoe-board'), size);
		this.container.appendChild(this.el);
	}

	public onBoardClick(callback: {(cellPos: CellPosition): void}) {
		this.board.subscribeClick(callback);
	}

	public destroy(): void {
		this.board.destroy();
	}

}