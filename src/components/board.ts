import 'es6-shim'
import './board.scss'
import Component from './component'

const TMPL_BOARD = '<div class="board"></div>';
const TMPL_ROW = '<div class="board-row"></div>';
const TMPL_CELL = '<div class="board-cell"></div>';

export default class Board extends Component {

	constructor(container: HTMLElement, size?: number) {
		super(container);
		this.buildDOM(size);
	}

	protected buildDOM(size: number = 3): void {
		this.el = Component.string2Element(TMPL_BOARD);

		const cssSize = 100/size;
		let row: HTMLElement;
		let cell: HTMLElement;
		for (let i = 0; i < size; i++) {
			
			row = Component.string2Element(TMPL_ROW);
			row.style.height = `${cssSize}%`;
			this.el.appendChild(row);

			for (let j = 0; j < size; j++) {
				cell = Component.string2Element(TMPL_CELL);
				cell.dataset['cell'] = `[${i}, ${j}]`;
				cell.style.width = `${cssSize}%`;
				row.appendChild(cell);
			}
		}

		this.container.appendChild(this.el);
	}

}
