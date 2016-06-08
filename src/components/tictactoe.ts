import './tictactoe.scss';
import { TILE, tile2String } from './tile'
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

	public setTile(i: number, j: number, tile: TILE): void {
		this.board.setTile(i, j, tile);
	}

	public setTiles(board: TILE[][]): void {
		this.board.setTiles(board);
	}

	private setInfo(message: string): void {
		this.info.innerHTML = message;
	}

	public setTurn(turn: TILE): void {
		this.setInfo(`Turn &rarr; <span>${tile2String(turn)}</span>`);
	}

	public setWinner(winner: TILE): void {
		this.setInfo(`Winner &laquo; <span>${tile2String(winner)}</span> &raquo;`);
	}

	public draw() {
		this.setInfo('Players have drawn');
	}

	public destroy(): void {
		this.board.destroy();
	}

}
