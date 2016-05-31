import HTMLComponent from './htmlcomponent'

const TMPL_BOARD = '<div class="board"></div>';
const TMPL_ROW = '<div class="board-row"></div>';
const TMPL_CELL = '<div class="board-cell"></div>';

export default class Board extends HTMLComponent {

	constructor(container: HTMLElement, size?: number) {
		super(container);
		this.container = container;
		this.buildDOM(size);
	}

	protected buildDOM(size: number = 3): void {
		this.el = HTMLComponent.string2Element(TMPL_BOARD);

		let row: HTMLElement;
		let cell: HTMLElement;
		for (let i = 0; i < size; i++) {
			row = HTMLComponent.string2Element(TMPL_ROW);
			this.el.appendChild(row);
			for (let j = 0; j < size; j++) {
				cell = HTMLComponent.string2Element(TMPL_CELL);
				cell.dataset['cell'] = `[${i}, ${j}]`;
				row.appendChild(cell);
			}
		}

		this.container.appendChild(this.el);
	}

}